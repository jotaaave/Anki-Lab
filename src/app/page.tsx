"use client";
import HomePage from "@/container/home";
import { theme } from "@/style/theme";
import { ThemeProvider } from "styled-components";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}
