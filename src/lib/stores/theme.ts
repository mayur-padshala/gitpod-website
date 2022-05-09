import { writable } from "svelte/store";

const storedTheme =
  typeof window !== "undefined" && localStorage.getItem("theme");
export const theme = writable(storedTheme);
theme.subscribe((value) => {
  typeof window !== "undefined" &&
    localStorage.setItem("theme", value === "dark" ? "dark" : "light");
});
