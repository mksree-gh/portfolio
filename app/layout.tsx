// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"; // Import the new provider

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Keerthi Sree Marrapu - Product Engineer',
  description: 'Product Engineer building AI and data-driven solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jost.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}