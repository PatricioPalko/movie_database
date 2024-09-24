"use client";
import { Box, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchInputProps } from "../../../types/Types";
import { RootState } from "../lib/store";
import styles from "./FilterInput.module.scss";
import { insertValue } from "./InsertValueSlice";

export const FilterInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.movieFilter.value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSearch(value);
    dispatch(insertValue(value));
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
        placeholder="Search..."
        autoFocus
        value={searchTerm}
      />
    </Box>
  );
};

export default FilterInput;
