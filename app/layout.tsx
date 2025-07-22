// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"; // Import the new provider

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Keerthi Sree Marrapu - Product Engineer',
  description: 'Product Engineer building AI and data-driven solutions',
  icons: {
    icon: '/profile-art.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HXZ1YQY655"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HXZ1YQY655');
            `,
          }}
        />
      </head>
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