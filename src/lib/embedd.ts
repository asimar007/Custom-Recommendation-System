import { VoyageEmbeddings } from "@langchain/community/embeddings/voyage";

const key = process.env.NEXT_PUBLIC_VOYAGEAI_API_KEY;

const embeddings = new VoyageEmbeddings({
  apiKey: key,
  inputType: "document",
});

//console.log(process.env.VOYAGEAI_API_KEY);

export const embedd = async (text: string) => {
  const embedding = await embeddings.embedQuery(text);
  return embedding;
};
