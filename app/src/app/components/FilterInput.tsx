"use client";
import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SearchInputProps } from "../../../types/Types";
import styles from "./FilterInput.module.scss";
import { insertValue } from "./InsertValueSlice";

export const FilterInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const storedValue = localStorage.getItem("searchTerm");
    if (storedValue) {
      setSearchValue(storedValue);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    localStorage.setItem("searchTerm", value);
  };

  const handleClick = () => {
    dispatch(insertValue(searchValue));
    onSearch(searchValue);
  };

  return (
    <Box className={styles.inputWrapper}>
      <TextField
        id="standard-basic"
        variant="standard"
        onChange={handleInputChange}
        className={styles.filterItem}
        InputProps={{
          className: styles.filterInput,
          classes: {
            focused: styles.focused,
            root: styles.root,
          },
        }}
        placeholder="Type something..."
        value={searchValue}
        autoFocus
      />
      <Button onClick={handleClick} className={styles.button}>
        Search
      </Button>
    </Box>
  );
};

export default FilterInput;
