"use client";

import { saveSearchState } from "@/app/helpers/searchMemory";
import { useDebounce } from "@/app/hooks/useDebounce";
import {
  Box,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";

export const FilterInput: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialValue = searchParams.get("q") ?? "";

  const [value, setValue] = useState(initialValue);

  const debouncedValue = useDebounce(value, 400);

  useEffect(() => {
    const params = new URLSearchParams();

    if (debouncedValue) {
      params.set("q", debouncedValue);
      params.set("page", "1");
      saveSearchState(debouncedValue, 1);
    }

    router.replace(`?${params.toString()}`);
  }, [debouncedValue, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  useEffect(() => {
    const q = searchParams.get("q") ?? "";
    setValue(q);
  }, [searchParams]);

  const isTyping = value !== debouncedValue;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: 3,
        width: "100%",
        maxWidth: 400,
        mx: "auto",
      }}
    >
      <TextField
        variant="standard"
        value={value}
        onChange={handleInputChange}
        placeholder="Search movies..."
        autoFocus
        fullWidth
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <MdSearch size={20} color="#34D399" />
              </InputAdornment>
            ),

            endAdornment: (
              <InputAdornment position="end">
                {isTyping ? (
                  <CircularProgress
                    size={18}
                    sx={{
                      color: "#34D399",
                    }}
                  />
                ) : value ? (
                  <IconButton onClick={handleClear} size="small">
                    <MdClose
                      size={18}
                      style={{ color: "white", opacity: 0.7 }}
                    />
                  </IconButton>
                ) : null}
              </InputAdornment>
            ),
          },
        }}
        sx={{
          maxWidth: 500,

          "& .MuiInput-root": {
            borderRadius: "999px",
            px: 2,
            py: 1,
            backgroundColor: "rgba(255,255,255,0.05)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            transition: "all 0.25s ease",
            border: "1px solid rgba(255,255,255,0.2)",
            "&:before": { display: "none" },
            "&:after": { display: "none" },
            "&:hover:not(.Mui-disabled):before": {
              display: "none",
            },
          },

          input: {
            color: "text.primary",
            "&::placeholder": {
              opacity: 1,
            },
          },

          "& .MuiInput-root:hover": {
            backgroundColor: "rgba(255,255,255,0.08)",
          },

          "& .Mui-focused": {
            boxShadow: "0 0 0 2px #34D399, 0 6px 20px rgba(52,211,153,0.4)",
            backgroundColor: "rgba(255,255,255,0.08)",
          },
        }}
      />
    </Box>
  );
};

export default FilterInput;
