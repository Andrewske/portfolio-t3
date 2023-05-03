import { trpc } from "../../utils/trpc";
import { Component } from "react";
import Image from "next/image";
import Link from "next/link";

const SpotifyTopArtists = () => {
  const { data, isLoading } = trpc.spotify.topArtists.useQuery();

  if (isLoading) {
    return <div></div>;
  } else {
    console.log(data);
  }

  // what data do I want for each artist?

  return (
    <div className="spotify-top-artists">
      {data &&
        data?.map(
          ({
            name,
            artistId,
            artistUrl,
            imgUrl,
          }: {
            name: string;
            artistId: string;
            artistUrl: string;
            imgUrl: string;
          }) => (
            <a
              target="_blank"
              rel="noreferrer"
              href={artistUrl}
              key={artistId}
              className="artist"
            >
              <Image alt={name} src={imgUrl} width={160} height={160} />
              <p>{name}</p>
            </a>
          )
        )}
    </div>
  );
};

export default SpotifyTopArtists;
