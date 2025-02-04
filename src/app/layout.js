import Header from "./header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ICS4UP Portfolio",
  description: "Welcome to my ICS4U Portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dGrey text-gold">
        <Header /> {/*Renders header componnent*/}
        {/* Adjust padding to avoid header overlap */}
        <main className="pt-20 container mx-auto p-5">{children}</main>
        <footer className="text-center p-4 bg-fGrey shadow mt-4">
          © 2025 Justin Jiang
        </footer>
      </body>
    </html>
  );
}
