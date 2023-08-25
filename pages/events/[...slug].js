import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function SingleEventsPage() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-2xl">Single Event Slug</h1>
    </main>
  );
}
