import React, { useRef } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const SearchInputWrapper = styled.div`
  margin: 0 50px;
`;

const Search = ({ word, setWord, setSearching }) => {
  // useRef..
  const searchInput = useRef("");

  // search on enter key press
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      setSearching(true);
      setWord(e.target.value);
    }
  };

  const handleButtonClick = () => {
    if (word === "") {
      console.log("focused");
      searchInput.current.focus();
    }

    console.log(searchInput.current.value);
    searchInput.current.focus();

    setSearching(true);
    setWord(searchInput.current.value);
  };

  return (
    <SearchContainer>
      <SearchInputWrapper>
        <TextField
          inputRef={searchInput}
          onKeyDown={handleEnter}
          id="standard-basic"
          label="Looking for.."
        />
      </SearchInputWrapper>

      <Button
        variant="contained"
        color="primary"
        style={{ height: "35px" }}
        onClick={handleButtonClick}
      >
        Search
      </Button>
    </SearchContainer>
  );
};

export default Search;
