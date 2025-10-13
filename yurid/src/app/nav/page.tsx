"use client";
import React from "react";
import NavBubble from "@/components/NavBubble";

export default function NavPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Navigation (standalone)</h2>
        <p className="mb-6 text-gray-700">This page demonstrates the floating nav bubble as an independent route.</p>

        <NavBubble defaultOpen={true} />
      </div>
    </main>
  );
}
