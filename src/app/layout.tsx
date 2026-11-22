import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '🎲 لودو الممالك الأسطورية | Mythical Ludo',
  description: 'لعبة اللودو الكلاسيكية بتصميم فلكي أسطوري ومؤثرات حماسية',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased min-h-screen bg-[#031020] text-slate-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
