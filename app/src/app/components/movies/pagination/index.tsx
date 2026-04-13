import styles from "@/app/page.module.scss";
import { PaginationProps } from "@/app/types/Types";
import { Pagination, PaginationItem, Stack } from "@mui/material";

export default function MoviesPagination({
  totalPages,
  currentPage,
  handlePageChange,
}: PaginationProps) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        size="small"
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded"
        siblingCount={1}
        boundaryCount={1}
        color="secondary"
        className={styles.pagination}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            className={styles.paginationItem}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "#74777d",
                color: "#ffd369 !important",
              },
            }}
          />
        )}
      />
    </Stack>
  );
}
