import { trpc } from "../../utils/trpc";

const SpotifyTopArtists = () => {
  const { data, isLoading } = trpc.spotify.topArtists.useQuery();

  if (isLoading) {
    return;
  } else {
    console.log(data);
  }

  return (
    <div>
      {data &&
        data?.items.map((artist: { name: string; id: string }) => (
          <p key={artist.id}>{artist.name}</p>
        ))}
    </div>
  );
};

export default SpotifyTopArtists;
