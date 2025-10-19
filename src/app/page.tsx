"use client";

import React from "react";

export default function HomePage() {
  // Function to get greeting based on current time
  const getGreeting = (): string => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 12) {
      return "Buenos Días";
    } else if (hour >= 12 && hour < 18) {
      return "Buenas Tardes";
    } else {
      return "Buenas Noches";
    }
  };

  const greeting = getGreeting();

  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontSize: "2rem" }}>
      <h1>{greeting}</h1>
    </main>
  );
}
