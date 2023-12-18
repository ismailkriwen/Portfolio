"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggler = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isSelected, setIsSelected] = useState(false);
  const changeTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  useEffect(() => {
    resolvedTheme === "dark" && setIsSelected(true);
  }, [resolvedTheme]);

  return (
    <Switch size="sm" isSelected={isSelected} onValueChange={changeTheme} />
  );
};
