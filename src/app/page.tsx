import Image from "next/image";
import { Slider } from "@/components/Slider";
import { getSliderProps } from "@/lib/queries";


export default async function Home() {
  const sliderPages = await getSliderProps();
  return (
    <div>
      
      <Slider sliderPages={sliderPages} /> 
      
    </div>
  );
}
