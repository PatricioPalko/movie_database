import { auth } from "@/app/auth";
import { Box, Container, Stack, Typography } from "@mui/material";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          minHeight: "100vh",
          px: 2,
          py: 6,
          background:
            "radial-gradient(circle at top, rgba(52,211,153,0.08), transparent 40%)",
        }}
      >
        <Stack spacing={1} sx={{ mb: 4 }}>
          <Typography variant="h4">Welcome {session.user?.name}</Typography>

          <Typography sx={{ opacity: 0.6 }}>Personal dashboard</Typography>
        </Stack>
      </Box>
    </Container>
  );
}
