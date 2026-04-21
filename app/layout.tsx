import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Providers } from "@/components/providers"

export const metadata: Metadata = {
  title: "Amsytech - Інженерні рішення для опалення",
  description: "Відібрані інженерні рішення, що забезпечують надійну роботу та ефективність",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                  document.documentElement.classList.add('no-transition');
                  window.addEventListener('load', function() {
                    // Збільшено до 200ms щоб next-themes встиг завершити гідратацію
                    // перш ніж transitions увімкнуться і браузер відновить scroll position
                    setTimeout(function() {
                      document.documentElement.classList.remove('no-transition');
                    }, 200);
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}