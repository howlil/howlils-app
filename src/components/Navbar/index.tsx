"use client";

import React from "react";
import Link from "next/link";
import { navlink } from "@/utils/const";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();

  return (  
    <div className="text-neutral-400 px-6 py-2 border-neutral-100 bg-neutral-50 bg-opacity-5 backdrop-blur-sm border-opacity-15 border rounded-full space-x-4">
      {navlink.map((item, i) => {
        const isActive = currentPath === item.link;

        return (
          <Link
            key={i}
            href={item.link}
            className={isActive ? "text-primary border-b pb-3 gradient-border" : ""}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
