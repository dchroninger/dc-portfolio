import {forwardRef, useState} from "react";
import GoogleMap from "../components/GoogleMap";

export const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 45.633331,
    lng: -122.599998,
  })

  const inputClasses = "p-2 bg-transparent border-2 border-gray-500 w-full mb-5";

  return (
    <div ref={ref} className="h-screen w-full p-10">
      <div className="h-full w-full flex justify-center items-center gap-10">
        <div className="h-full w-1/2 flex justify-center items-center relative">
          <div className="z-0 h-full w-full absolute top-0 left-0 opacity-30 rounded-2xl bg-gray-700" />
          <div className="absolute z-1 rounded-2xl bg-gray-300 p-5 mx-5">
            <input name={"name"} placeholder={"Name"} className={inputClasses} />
            <input name={"email"} placeholder={"Email"} className={inputClasses} />
            <textarea name={"message"} placeholder={"Message"} className={inputClasses} />
            <button className={"p-2 rounded-2xl bg-transparent border-2 border-gray-500 w-full"}>Send</button>
          </div>
        </div>
        <div className="h-full w-1/2 rounded-2xl overflow-hidden">
          <GoogleMap
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "You forgot your key..."}
            center={center}
            zoom={11}
          />
        </div>
      </div>
    </div>)
});

Contact.displayName = "Contact";