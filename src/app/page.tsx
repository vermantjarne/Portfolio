"use client"
import React, { useState } from 'react';
import LargeLink from "./components/home/LargeLink";

export default function Home() {
  const [greeting, setGreeting] = useState("user");

  const handleInputChange = (event: any) => {
    setGreeting(event.target.value);
  };

  return (
    <div className="container flex flex-col justify-center gap-10 pb-[5rem]">
      <div className="relative w-full flex justify-center">
        <p className='absolute top-[-1.5rem] ml-48 text-blue-500 rotate-6'>Edit me!</p>
        <p className="text-2xl font-bold text-gray-700">
          Greetings,{' '}
          <span
            contentEditable
            onInput={handleInputChange}
            suppressContentEditableWarning={true}
            className={greeting === 'user' ? 'underline' : ''}
          >
            user
          </span>
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
