import { type NextApiRequest, type NextApiResponse } from "next";
import { appRouter } from "../../../server/trpc/router/_app";
import { createTRPCContext } from "../../../server/trpc/context";

const refreshKevinHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const ctx = await createTRPCContext({ req, res });
  const caller = appRouter.createCaller(ctx);

  // try {
  //     const accessToken = await caller.spotify.updateKevin
  // }
};
