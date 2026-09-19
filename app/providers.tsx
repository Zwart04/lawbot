import { TranslationsProvider } from "@/lib/translations-context";
import { AppProvider } from "@/lib/app-context";
import "./globals.css";

export { Toaster } from "components/ui/toast";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        <TranslationsProvider>
          <AppProvider>
            {children}
          </AppProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
