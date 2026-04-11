import styles from "@/page.module.scss";
import { PaginationProps } from "@/types/Types";
import { Pagination, PaginationItem, Stack } from "@mui/material";

export default function MoviesPagination({
  totalPages,
  currentPage,
  onChange,
}: PaginationProps) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        size="small"
        page={currentPage}
        onChange={onChange}
        shape="rounded"
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
