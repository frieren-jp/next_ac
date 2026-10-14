import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = { title: 'Практика Next.js', description: 'App Router, серверные и клиентские компоненты' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>
    <header><Link className="brand" href="/">N / Практика</Link><nav aria-label="Основная навигация">
      <Link href="/server-demo">Сервер</Link><Link href="/client-demo">Клиент</Link><Link href="/greet-demo">Server Action</Link><Link href="/about">О проекте</Link>
    </nav></header><main>{children}</main>
    <footer>Учебная работа · Next.js / App Router</footer>
  </body></html>;
}
