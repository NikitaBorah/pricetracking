import type { Metadata } from "next";
import {Navbar} from '@/components/Navbar';
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700']
 })
export const metadata: Metadata = {
  title: 'Pricewise',
  description: 'Track product prices effortlessly and save money on your online shopping.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="max-w-10xl mx-auto">
      <Navbar/>
        {children}
        </main>
        </body>
    </html>
  );
}
