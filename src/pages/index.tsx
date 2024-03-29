import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
// import Sidebar from "../components/sidebar/Sidebar";
// import SpotifyTopArtists from "../components/spotify/SpotifyTopArtists";
// import SpotifySavedTracks from "../components/spotify/SpotifySavedTracks";
// import Section from "../components/Section";

import About from "../components/sections/About";

const Home: NextPage = () => {
  // const { data: sessionData } = useSession();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>Kevin Andrews Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Web Developer and Data Analyst" />
        <link rel="icon" href="/icons8-developer-50.ico" />
      </Head>
      {/* <Sidebar /> */}
      <main>
        <section id="banner" className="banner container">
          <Link href="#about" onClick={handleScroll}>
            <h1 className="hover-color">
              Hi I&apos;m <br />
              Kevin Andrews
            </h1>
          </Link>
          <h2 className="hover-color">WEB DEVELOPER</h2>
          <h2 className="hover-color">DATA ANALYST</h2>
          <h2 className="hover-color">CONTACT</h2>
        </section>
        {/* <div className="flex flex-col items-center gap-2">
            <AuthShowcase />
          </div> */}
        {/* <SpotifySavedTracks />

          <SpotifyTopArtists /> */}
      </main>
      <About />
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => signOut() : () => signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
