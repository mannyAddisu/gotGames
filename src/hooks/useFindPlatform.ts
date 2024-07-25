import usePlatform from "./usePlatform";

const useFindPlatform = (id?: number) => {
  const { data: platform } = usePlatform();
  return platform?.results.find((platform) => platform.id === id);
};
export default useFindPlatform;
