
const useGenre = (selectedGenres) => {

    if (selectedGenres.length < 1) return "";

    const Genreids = selectedGenres.map((g) => g.id);
    return Genreids.reduce((acc, curr) => acc + "," + curr);
}

export default useGenre;