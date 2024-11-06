import { ThemeProvider, type ThemeProviderProps } from "next-themes"

export function NextThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    {children}
  </ThemeProvider>
}
