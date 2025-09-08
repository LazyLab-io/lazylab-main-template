import React from "react";
import { notFound } from "next/navigation";

export default async function UserDetails({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userId = (await params).userId;

  if (parseInt(userId) >= 1000) {
    notFound();
  }

  return (
    <div>
      <h1>Details about user {userId}</h1>
    </div>
  );
}
