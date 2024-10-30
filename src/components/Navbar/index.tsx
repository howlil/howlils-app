"use client";

import React from "react";
import Link from "next/link";
import { navlink } from "@/utils/const";
import { isPathActive } from "@/utils/utils";

export default function Navbar() {
  return (
    <>
      <div className=" text-neutral-400 px-6 py-2 border-neutral-100 bg-neutral-50 bg-opacity-5  backdrop-blur-sm border-opacity-15 border rounded-full space-x-4 ">
        {navlink.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className={isPathActive(item.link) ? "text-primary border-b pb-3 gradient-border" : ""}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
}
