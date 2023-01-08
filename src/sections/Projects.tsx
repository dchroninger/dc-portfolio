import {forwardRef} from "react";

export const Projects = forwardRef<HTMLDivElement>((_,ref) => {
  return (
    <div ref={ref} className="h-screen w-full">
      <div className="h-full w-full flex justify-center items-center snap-always snap-center">
        <h1 className="text-6xl font-bold text-white">Projects Section</h1>
      </div>
    </div>)
});

Projects.displayName = "Projects";