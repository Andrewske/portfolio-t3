import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import SpotifyProvider from "next-auth/providers/spotify";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";

const scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-follow-read",
  "user-read-currently-playing",
  "user-read-playback-position",
  "user-library-modify",
  "playlist-modify-private",
  "playlist-modify-public",
  "user-read-email",
  "user-top-read",
  "user-read-recently-played",
  "user-library-read",
];

async function refreshAccessToken(token) {
  try {
    const url =
      "https://api.spotify.com/v1/swap?" +
      new URLSearchParams({
        client_id: process.env.SPOTIFY_CLIENT_ID ?? "",
        client_secret: process.env.SPOTIFY_CLIENT_SECRET ?? "",
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      });

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      accessTokenExpires: refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;

        const [spotify] = await prisma.account.findMany({
          where: { userId: user.id, provider: "spotify" },
        });

        if (spotify?.expires_at && spotify?.expires_at * 1000 < Date.now()) {
          try {
            const response = await fetch<SpotifyTokenType>(
              "https://api.spotify.com/v1/swap",
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                  client_id: process.env.SPOTIFY_CLIENT_ID ?? "",
                  client_secret: process.env.SPOTIFY_CLIENT_SECRET ?? "",
                  grant_type: "refresh_token",
                  refresh_token: spotify?.refresh_token ?? "",
                }),
                method: "POST",
              }
            );

            const tokens = response.json();

            if (!response.ok) throw tokens;

            if (tokens && tokens?.access_token)
              await prisma.account.update({
                data: {
                  access_token: tokens.access_token ?? "",
                  expires_at: Math.floor(Date.now() / 1000 + token.expires_in),
                  refresh_token: tokens.refresh_token ?? spotify?.refresh_token,
                },
                where: {
                  provider_providerAccountId: {
                    provider: "google",
                    providerAccountId: spotify?.providerAccountId ?? "",
                  },
                },
              });
          } catch (error) {}
        }
      }

      return session;

      // if(spotify?.expires_at * 1000 < Date.now()) {

      //   try{
      // const response = await fetch("https://api.spotify.com/v1/swap", {
      //   headers: {"Content-Type": 'application/x-www-form-urlencoded'},
      //   body: new URLSearchParams({
      //     client_id: process.env.SPOTIFY_CLIENT_ID ?? "",
      //     client_secret: process.env.SPOTIFY_CLIENT_SECRET ?? "",
      //     grant_type: "refresh_token",
      //     refresh_token: spotify?.refresh_token ?? ""
      //   }),
      //   method: 'POST'
      // })

      // const tokens = response.json()

      // if(!response.ok) throw tokens

      // await prisma.account.update({
      //   data: {
      //     access_token: tokens.access_token,
      //     expires_at: Math.floor(Date.now() / 1000  + token.expires_in),
      //     refresh_token: tokens.refresh_token ?? spotify?.refresh_token,
      //   },
      //   where: {
      //     provider_providerAccountId: {
      //       provider: "google",
      //       providerAccountId: spotify?.providerAccountId ?? '',
      //     }
      //   }
      // })
      //   } catch(error) {

      //   }

      // }
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    SpotifyProvider({
      authorization: {
        params: { scope: scopes.join(" ") },
      },
      clientId: env.SPOTIFY_CLIENT_ID,
      clientSecret: env.SPOTIFY_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
