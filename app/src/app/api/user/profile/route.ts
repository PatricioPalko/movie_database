import { auth } from "@/app/auth";
import { db } from "@/app/lib/db";

export async function GET() {
  const session = await auth();

  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const profile = await db.user.findUnique({
    where: { id: session.user.id },
  });

  return Response.json(profile);
}
