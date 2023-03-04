import { trpc } from "../../utils/trpc";

const SpotifyTopArtists = () => {
  const {
    data: { items },
  } = trpc.spotify.topArtists.useQuery();

  return (
    <div>
      {items &&
        items.map((artist: { name: string; id: string }) => (
          <p key={artist.id}>{artist.name}</p>
        ))}
    </div>
  );
};

export default SpotifyTopArtists;
