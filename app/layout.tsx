// app/layout.tsx
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "./Component/theme-provider";
import "./globals.css";
import LenisClient from './(home)/Components/lenis'; // Import the client component

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LenisClient /> {/* Add the client component here */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
