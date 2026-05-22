"use client";

import { TextGenerateEffect } from "./text-generate-effect";

const AnimatedTitle = () => {
  return (
    <div className="flex justify-center w-full">
      <TextGenerateEffect
        words="A Small Selection of Recent Projects"
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
      />
    </div>
  );
};

export default AnimatedTitle;
