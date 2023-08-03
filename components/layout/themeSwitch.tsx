import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="p-1 px-4 text-sm text-white transition-all bg-black border border-black rounded-full hover:bg-white hover:text-black"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      Change Theme
    </button>
  );
}
