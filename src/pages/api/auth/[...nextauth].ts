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

type SpotifyTokenType = {
  access_token?: string;
  expires_in?: number;
  token_type?: string;
  scope?: string;
};

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
                  expires_at: Math.floor(
                    Date.now() / 1000 + (tokens?.expires_in ?? 0)
                  ),
                },
                where: {
                  provider_providerAccountId: {
                    provider: "spotify",
                    providerAccountId: spotify?.providerAccountId ?? "",
                  },
                },
              });
          } catch (error) {
            console.error("Error refreshing access token:", { error });
            session.error = "RefreshAccessTokenError";
          }
        }
      }

      return session;
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
