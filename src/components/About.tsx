import {forwardRef} from "react";

export const About = forwardRef<HTMLDivElement>((_,ref) => {
  return (
    <div ref={ref} className="h-screen w-full">
      <div className="h-full w-full flex justify-center items-center">
        <h1 className="text-6xl font-bold text-white">About Section</h1>
      </div>
    </div>)
});

About.displayName = "About";