"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  }
  return (
    <form
      className="flex border border-green-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full focus:outline-none"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />
      <RxCross2
        className="text-2xl text-green-500 cursor-pointer sm:mr-2"
        onClick={() => setTerm("")}
      />
      <BsFillMicFill className="hidden sm:inline-flex text-2xl text-blue-400 border-l-2 border-gray-300 mr-3 cursor-pointer" />
      <AiOutlineSearch
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
        onClick={handleSubmit}
      />
    </form>
  );
}
