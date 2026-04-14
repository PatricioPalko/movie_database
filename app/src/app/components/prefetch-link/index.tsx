"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function PrefetchLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <Link
      href={href}
      onMouseEnter={() => router.prefetch(href)}
      style={{
        textDecoration: "none",
        display: "block",
        width: "100%",
      }}
    >
      {children}
    </Link>
  );
}
