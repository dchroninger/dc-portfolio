import {type RefObject, useEffect, useState} from "react";

export function useIsInViewport(ref: RefObject<Element>) {
  const [isIntersecting, setIsIntersecting] = useState(false);


  useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry?.isIntersecting ?? false),
      );
    if(!ref.current) return;
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}