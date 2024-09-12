import localFont from "next/font/local";
import "./../globals.css";
import Footer from "@/components/Footer";
import SearchHeader from "@/components/SearchHeader";

export const metadata = {
  title: "Google Clone",
  description: "Google clone created using Next.js",
};

export default function SearchLayout({ children }) {
  return (
    <div className="">
      <SearchHeader />
      {children}
      <Footer />
    </div>
  );
}
