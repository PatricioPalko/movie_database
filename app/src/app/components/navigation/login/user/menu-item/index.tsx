import { MenuItem, SxProps, Theme } from "@mui/material";

export default function UserMenuItem({
  onClick,
  children,
  sx,
}: {
  onClick: () => void;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}) {
  return (
    <MenuItem
      onClick={onClick}
      sx={{
        gap: 1.5,
        py: 1.2,
        "&:hover": {
          backgroundColor: "rgba(52, 211, 153, 0.15)",
        },
        ...sx,
      }}
    >
      {children}
    </MenuItem>
  );
}
