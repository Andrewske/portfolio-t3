import { type DefaultSession } from "next-auth";

// import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
    } & DefaultSession["user"];
    error?: "RefreshAccessTokenError";
  }
  interface SpotifyTokenType {
    access_token?: string;
    refresh_token?: string;
    expires_in?: number;
    scope?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token?: Account.access_token;
    expires_at?: Account.expiresAt;
    refresh_token?: Account.refresh_token;
    error?: "RefreshAccessTokenError";
  }
}
