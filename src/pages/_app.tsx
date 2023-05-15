import type { AppType, AppProps } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import { Roboto, JetBrains_Mono } from "next/font/google";

import "../styles/globals.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

const MyApp: AppType<{ session: Session }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <style jsx global>{`
        html {
          font-family: ${jetbrains.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} className={roboto.className} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
