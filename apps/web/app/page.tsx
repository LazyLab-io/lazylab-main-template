import { ModeToggle } from "./darkmodeToggle";
import React from "react";

export default async function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Lazy from by LazyLab
        </h1>
      </div>
    </main>
  );
}
