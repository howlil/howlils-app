import React from "react";
import Link from "next/link";
import { navlink } from "@/utils/const";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center py-4">
          <ul className="flex items-center text-neutral-400 space-x-4 ml-8">
            {navlink.map((item, i) => (
              <li key={i}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
      </div>
    </>
  );
}
