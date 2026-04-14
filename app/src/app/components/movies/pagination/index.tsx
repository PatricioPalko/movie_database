import { PaginationProps } from "@/app/types/Types";
import { Pagination, PaginationItem, Stack } from "@mui/material";

export default function MoviesPagination({
  totalPages,
  currentPage,
  handlePageChange,
}: PaginationProps) {
  return (
    <Stack
      spacing={2}
      sx={{
        my: 6,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded"
        siblingCount={1}
        boundaryCount={2}
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            {...item}
            sx={{
              color: "text.secondary",

              "&.Mui-selected": {
                backgroundColor: "#34D399",
                color: "#0A0F1C",
              },

              "&:hover": {
                border: "2px solid #34D399",
                backgroundColor: "transparent",
              },

              "&.Mui-selected:hover": {
                backgroundColor: "#34D399",
              },
            }}
          />
        )}
      />
    </Stack>
  );
}
