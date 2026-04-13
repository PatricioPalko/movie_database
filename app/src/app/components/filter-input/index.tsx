"use client";

import { saveSearchState } from "@/app/helpers/searchMemory";
import { Box, TextField } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import styles from "../FilterInput.module.scss";

export const FilterInput: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchValue = searchParams.get("q") ?? "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const params = new URLSearchParams();

    if (value) {
      params.set("q", value);
      params.set("page", "1");

      saveSearchState(value, 1);
    }

    router.replace(`?${params.toString()}`);
  };

  return (
    <Box className={styles.inputWrapper}>
      <TextField
        variant="standard"
        onChange={handleInputChange}
        value={searchValue}
        placeholder="Type something..."
        autoFocus
        className={styles.filterItem}
        slotProps={{
          input: {
            className: styles.filterInput,
          },
        }}
      />
    </Box>
  );
};

export default FilterInput;
