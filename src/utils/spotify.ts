import { prisma } from "../server/db/client";
import { type SpotifyTokenType } from "next-auth";
import { type Account } from "@prisma/client";

const refreshToken = async (spotify: Account) => {
  try {
    const url = "https://accounts.spotify.com/api/token";

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: process.env.SPOTIFY_CLIENT_ID ?? "",
        client_secret: process.env.SPOTIFY_CLIENT_SECRET ?? "",
        grant_type: "refresh_token",
        refresh_token: spotify.refresh_token ?? "",
      }),
      method: "POST",
    });

    const tokens = (await response.json()) as SpotifyTokenType;

    if (!response.ok) {
      throw tokens;
    }

    if (tokens && tokens?.access_token)
      await prisma.account.update({
        data: {
          access_token: tokens.access_token ?? "",
          expires_at: Math.floor(Date.now() / 1000 + (tokens?.expires_in ?? 0)),
        },
        where: {
          provider_providerAccountId: {
            provider: "spotify",
            providerAccountId: spotify?.providerAccountId ?? "",
          },
        },
      });
    return tokens;
  } catch (error) {
    console.error("Error refreshing access token:", { error });
  }
};

export const getAccessToken = async (userId: string) => {
  const [spotify] = await prisma.account.findMany({
    where: { userId, provider: "spotify" },
  });

  if (spotify?.expires_at && spotify?.expires_at * 1000 < Date.now()) {
    refreshToken(spotify);
  }

  return spotify?.access_token;
};
