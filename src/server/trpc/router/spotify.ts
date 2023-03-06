import { router, protectedProcedure, publicProcedure } from "../trpc";
import { getAccessToken } from "../../../utils/spotify";

type ImageType = {
  height: number;
  url: string;
};

type ArtistItemType = {
  name: string;
  external_urls: { spotify: string };
  images: ImageType[];
  id: string;
};

const pickImage = (images: Array<ImageType>) => {
  const minHeight = 100;

  // Filter the array of images returned from spotify
  // to find the smallest image above the minimum height

  const { url } = images
    .filter((image: ImageType) => image.height > minHeight)
    .reduce((prev, curr) => (prev.height < curr.height ? prev : curr), {
      height: Infinity,
      url: "",
    });

  return url;
};

export const spotifyRouter = router({
  topArtists: publicProcedure.query(async () => {
    const accessToken = await getAccessToken(process.env.KEVIN_USER_ID ?? "");

    const data = await fetch("https://api.spotify.com/v1/me/top/artists", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    }).then((res) => {
      console.log("called spotify");
      return res.json();
    });

    if (data?.items?.length > 0) {
      const artists = data.items.map((item: ArtistItemType) => ({
        artistUrl: item.external_urls.spotify,
        artistId: item.id,
        imgUrl: pickImage(item.images),
        name: item.name,
      }));

      return artists;
    }

    return null;
  }),
});
