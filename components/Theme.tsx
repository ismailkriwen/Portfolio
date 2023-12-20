"use client";

import { Switch } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggler = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isSelected, setIsSelected] = useState(false);
  const changeTheme = () =>
    resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");

  useEffect(() => {
    resolvedTheme === "dark" ? setIsSelected(true) : setIsSelected(false);
  }, [resolvedTheme]);

  return (
    <Switch
      size="sm"
      isSelected={isSelected}
      onValueChange={changeTheme}
      endContent={<Sun className="w-4 h-4" />}
      startContent={<Moon className="w-4 h-4" />}
    />
  );
};
