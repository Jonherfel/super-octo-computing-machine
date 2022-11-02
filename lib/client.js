import sanityClient from "@sanity/client";
import imageURLBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "39xbrql1",
  dataset: "production",
  apiVersion: "2022-10-22",
  useCdn: true,
  token: process.env.NEXT_PUBBLIC_SANITY_TOKEN,
});

const builder = imageURLBuilder(client);

export const urlFor = (source) => builder.image(source);
