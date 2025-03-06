"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ModeToggleProps = React.HTMLAttributes<HTMLDivElement>;


export function ModeToggle({ className, ...props }: ModeToggleProps) {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      <Button
        variant="ghost"
        size="icon"
        className="size-12 rounded-full"
        onClick={toggleTheme}
      >
        <SunIcon className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
