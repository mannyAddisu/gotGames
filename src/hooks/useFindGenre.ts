import useGenres from "./useGenres";

const useFindGenre = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((genre) => genre.id === id);
};

export default useFindGenre;
