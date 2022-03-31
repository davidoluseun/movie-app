import * as React from "react";
import { ChakraProvider as Chakra, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchField from "./components/SearchField";
import Movie from "./components/Movie";
import Info from "./components/Info";
import theme from "./theme-config/theme";
import "@fontsource/dm-sans";

function App() {
  const url = "https://www.omdbapi.com/?&apikey=e1a73560&";
  const [search, setSearch] = React.useState("beyond");
  const [movies, setMovies] = React.useState([]);
  const [category, setCategory] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      setLoading(true);
      setError(false);

      try {
        const searchRes = await fetch(`${url}s=${search}`);
        const searchData = await searchRes.json();

        const movieRes = await fetch(`${url}t=${searchData.Search[0].Title}`);
        const movieData = await movieRes.json();

        if (!didCancel) {
          setMovies(searchData.Search);
          setCategory(movieData.Genre.split(",")[0]);
        }
      } catch (ex) {
        if (!didCancel) setError(true);
      }
      if (!didCancel) setLoading(false);
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [search]);

  const handleSearch = (query: string) => {
    setSearch(query);
  };

  const startIndex = 0;
  const endIndex = movies?.length;
  const midIndex = movies?.length / 2;

  return (
    <Chakra resetCSS={true} theme={theme}>
      <Header />
      <Hero />
      <Box px={{ base: "7", md: "77px" }} mb={{ base: "50px", md: "67px" }}>
        <SearchField onSearch={handleSearch} />
        {loading ? (
          <Info text="Loading movies. Please wait..." />
        ) : (
          <>
            {error ? (
              <Info text="An error occurred. Please search again" />
            ) : (
              <>
                {!movies ? (
                  <Info text="There is no movie available for your search. Please search for another movie" />
                ) : (
                  <>
                    <Movie
                      movieCount={midIndex}
                      category={category}
                      movies={movies.slice(startIndex, midIndex)}
                    />
                    <Movie
                      movieCount={midIndex}
                      category={category}
                      movies={movies.slice(midIndex, endIndex)}
                    />
                  </>
                )}
              </>
            )}
          </>
        )}
      </Box>
    </Chakra>
  );
}

export default App;
