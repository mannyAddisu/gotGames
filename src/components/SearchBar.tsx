import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input variant="filled" borderRadius={20} placeholder="Search games..." />
    </InputGroup>
  );
};

export default SearchBar;
