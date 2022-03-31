import * as React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

type SearchFieldProps = {
  onSearch: (query: string) => void;
};

const SearchField = ({ onSearch }: SearchFieldProps) => {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl mt={{ base: "56px", md: "63px" }}>
        <FormLabel
          htmlFor="search"
          fontWeight="400"
          fontSize="16px"
          lineHeight="21px"
          w="51px"
          mb="1"
        >
          Search
        </FormLabel>
        <Input
          id="search"
          name="search"
          value={query}
          borderRadius="0"
          borderColor="#000"
          _hover={{ borderColor: "none" }}
          h={{ base: "34px", md: "54px" }}
          w={{ base: "265px", md: "680px", xxl: "1306px" }}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
      </FormControl>
    </form>
  );
};

export default SearchField;
