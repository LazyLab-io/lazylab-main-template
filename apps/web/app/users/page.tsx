// app/page.tsx
import { UserList } from "./userList";
import { LoginCard } from "./loginCard";
import React from "react";

export default async function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Lazy form. Test our API.
        </h1>
        <LoginCard />
      </div>

      <div>
        <h1>Submitted users</h1>
        <UserList />
      </div>
    </main>
  );
}
