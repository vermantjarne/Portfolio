"use client"
import React, { useEffect, useRef, useState } from 'react';
import LargeLink from "./components/home/LargeLink";

export default function Home() {
  const [greeting, setGreeting] = useState("user");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: any) => {
    setGreeting(event.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = '10px';
      inputRef.current.style.width = `${inputRef.current.scrollWidth}px`; // Set the width to the content's width
    }
  }, [greeting]);

  return (
    <div className="container flex flex-col justify-center gap-10 pb-[5rem]">
      <div className="relative w-full flex justify-center">
        <p className='absolute top-[-1.5rem] ml-48 text-blue-500 rotate-6'>Edit me!</p>
        <p className="relative text-2xl font-bold text-gray-700">
          Greetings, {' '}
          <input
            type="text"
            value={greeting}
            onChange={handleInputChange}
            ref={inputRef}
            className="w-[52px] text-blue-500 font-bold bg-transparent"
          />
          !
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-4 lg:gap-12">
        <LargeLink title="About Me" description="Who I am" href="/about"/>
        <LargeLink title="Projects" description="My accomplishments" href="/projects"/>
      </div>
    </div>
  );
}
