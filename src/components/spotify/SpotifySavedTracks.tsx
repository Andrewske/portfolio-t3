import { trpc } from "../../utils/trpc";

const SpotifySavedTracks = () => {
  const { data, isLoading } = trpc.spotify.savedTracks.useQuery();

  if (!isLoading) {
    console.log(data);
  }
  return <div>SpotifySavedTracks</div>;
};

export default SpotifySavedTracks;
