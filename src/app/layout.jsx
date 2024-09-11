import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Google Clone",
  description: "Google clone created using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
