import './globals.css';
import { DM_Sans } from 'next/font/google';

const DMSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Gravy Mixes',
  description: 'Helping artists tell their story',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`DMSans.className bg-black`}>{children}</body>
    </html>
  );
}
