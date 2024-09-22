"use client";

import { Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import styles from "./FilterInput.module.scss";
import { insertValue } from "./InsertValueSlice";

export default function FilterInput({ searchTerm }: { searchTerm: string }) {
  const dispatch = useDispatch();

  return (
    <Box className={styles.inputWrapper}>
      <TextField
        id="standard-basic"
        variant="standard"
        onChange={(e) => dispatch(insertValue(e.target.value))}
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
}
