import { router, protectedProcedure, publicProcedure } from "../trpc";

export const spotifyRouter = router({
  topArtists: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.account.findFirst({
      where: { userId: ctx.session.user.id, provider: "spotify" },
    });

    const data = await fetch("https://api.spotify.com/v1/me/top/artists", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user?.access_token ?? "",
      },
    });

    console.log(data?.body);

    return { text: "hello" };
  }),
});
