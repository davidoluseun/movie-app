import { Box, Heading, Flex, Grid } from "@chakra-ui/react";

type MovieProps = {
  category: string;
  movies: MovieTypes[];
  movieCount: number;
};

const Movie = ({ category, movies, movieCount }: MovieProps) => {
  return (
    <>
      {movies.length ? (
        <Box as="section">
          <Heading
            as="h2"
            fontWeight="400"
            letterSpacing="0em"
            fontSize={{ base: "18px", md: "24px" }}
            lineHeight={{ base: "23px", md: "31px" }}
            color="#000"
            w={{ base: "210px", md: "279px" }}
            mt={{ base: "33px", md: "48px" }}
            mb={{ base: "26px", md: "18px" }}
          >
            {category}
          </Heading>

          <Grid
            gridColumnGap="13px"
            overflowX="scroll"
            className="hide-scrollbar"
            templateColumns={{
              base: `repeat(${movieCount}, 200px)`,
              md: `repeat(${movieCount}, 300px)`,
            }}
            mr={{ base: "-7", md: "-77px" }}
          >
            {movies.map((movie: MovieTypes) => (
              <Flex
                key={movie.imdbID}
                p="10px"
                maxW={{ base: "200px", md: "300px" }}
                h={{ base: "200px", md: "300px" }}
                borderRadius="12px"
                align="center"
                justify="center"
                textAlign="center"
                bg="#000"
                backgroundImage={`url(${movie.Poster})`}
              >
                <Box
                  color="#fff"
                  fontWeight="400"
                  fontSize={{ base: "18px", md: "24px" }}
                  lineHeight={{ base: "23px", md: "31px" }}
                >
                  {movie.Title}
                </Box>
              </Flex>
            ))}
          </Grid>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default Movie;
