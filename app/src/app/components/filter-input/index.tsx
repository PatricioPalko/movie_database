"use client";
import { useStore } from "@/store/useStore";
import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { SearchInputProps } from "../../types/Types";
import styles from "../FilterInput.module.scss";

export const FilterInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const { searchValue, setSearchValue } = useStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleClick = () => {
    onSearch(searchValue);
  };

  return (
    <Box className={styles.inputWrapper}>
      <TextField
        id="standard-basic"
        variant="standard"
        onChange={handleInputChange}
        className={styles.filterItem}
        placeholder="Type something..."
        value={searchValue}
        autoFocus
        slotProps={{
          input: {
            className: styles.filterInput,
          },
        }}
      />
      <Button onClick={handleClick} className={styles.button}>
        Search
      </Button>
    </Box>
  );
};

export default FilterInput;
