"use client";
import React from "react";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="top-0 z-30 w-full px-4 sm:fixed backdrop-blur bh-zinc-900/50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-2 pt-6 sm:h-20 sm:flex-row sm:pt-0">
          <Link href="/" className="text-2xl font-semibold duration-150 text-zinc-100 hover:text-white">
            Cyclops
          </Link>
        </div>
      </div>
    </header>
  );
};
