"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("Europe");
  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return <div className="">{country}</div>;
}
