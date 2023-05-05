import { type NextApiRequest, type NextApiResponse } from "next";
import { appRouter } from "../../../server/trpc/router/_app";
import { createContext } from "../../../server/trpc/context";

const refreshKevinHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const ctx = await createContext({ req, res });
  const caller = appRouter.createCaller(ctx);
  return caller;
  // try {
  //     const accessToken = await caller.spotify.updateKevin
  // }
};

export default refreshKevinHandler;
