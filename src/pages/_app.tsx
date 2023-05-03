import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

//import { Roboto } from "@next/font/google";

import "../styles/globals.scss";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400"],
// });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      {/* <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style> */}
      {/* <Component {...pageProps} className={roboto.className} /> */}
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
