import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import { MenuList } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import UsermenuItem from "../menu-item";

export default function UserMenuList({ onClose }: { onClose: () => void }) {
  const router = useRouter();

  return (
    <MenuList>
      <UsermenuItem
        onClick={() => {
          onClose();
          router.push("/dashboard");
        }}
      >
        <DashboardIcon fontSize="small" />
        Dashboard
      </UsermenuItem>
      <UsermenuItem
        onClick={() => {
          onClose();
          signOut();
        }}
        sx={{
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
          },
        }}
      >
        <LogoutIcon fontSize="small" />
        Logout
      </UsermenuItem>
    </MenuList>
  );
}
