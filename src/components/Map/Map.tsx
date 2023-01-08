import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";
import mapStyle from "./mapStyle";
import { useDeepCompareEffectForMaps } from "./useDeepCompareEffectForMaps";

interface MapProps extends google.maps.MapOptions {
  className: string;
  children?: ReactNode;
}

export default function Map({
  className,
  children,
  ...options
}: MapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map & Partial<unknown>>();

  useEffect(() => {
    if (ref.current && map === undefined) {
      const googleMap = new window.google.maps.Map(ref.current, {
        styles: mapStyle,
      });
      setMap(googleMap);
    }
  }, [ref, map]);

  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  return (
    <>
      <div ref={ref} className={className} />

      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child,map );
        }
      })}
    </>
  );
}
