import React from "react";
import { resolve } from "styled-jsx/css";
import Link from "next/link";

export default async function WebSearchPage({ searchParams }) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl bm-4">No results found</h1>
        <p className="text-lg">
          Try searching something else or go back to the homepage.{"  "}
          <Link className="text-blue-500" href="/">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <>{results && results.map((result) => <h1>{result.title}</h1>)}</>;
}
