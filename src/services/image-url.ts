import noImage from "../assets/noImage.jpg";

const getCroppedImages = (url: string) => {
  if (!url) return noImage;
  const link = url.split("media/");
  return link[0] + "media/crop/600/400/" + link[1];
};
export default getCroppedImages;
