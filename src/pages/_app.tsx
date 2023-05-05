import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import { Roboto } from "next/font/google";

import "../styles/globals.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppType<{ session: Session | null }>) => {
  return (
    <SessionProvider session={session}>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} className={roboto.className} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
