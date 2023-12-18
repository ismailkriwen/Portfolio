"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        storageKey="__portfolio-theme__"
        themes={["light", "dark"]}
        enableSystem={false}
        enableColorScheme={true}
        defaultTheme="light"
      >
        <NextUIProvider>{children}</NextUIProvider>
      </ThemeProvider>
    </>
  );
};
