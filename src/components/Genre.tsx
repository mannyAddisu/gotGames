import useGenres from "../hooks/useGenres";
const Genre = () => {
  const { genre } = useGenres();
  return (
    <ul>
      {genre.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default Genre;
