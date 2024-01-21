import { useLocalHost } from "./config";

export const generateImageUrl = (imageUrl) => {
  const baseURL = useLocalHost
    ? "http://localhost:4444"
    : "https://fotaku.me/api";
  return imageUrl ? `${baseURL}${imageUrl}` : "";
};
