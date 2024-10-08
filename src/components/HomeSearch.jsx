"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }
  async function randomSearch() {
    setRandomSearchLoading(true);
    const response = await fetch(`https://random-word-api.herokuapp.com/word`)
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl to-gray-100 mr-3" />
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-lg to-gray-100" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button className="btn" onClick={handleSubmit}>
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            <img
              className="h-6 text-center"
              src="spinner.svg"
              alt="Loading..."
            />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
