import Image from "next/image";
import { SliderM } from "@/components/SliderM";
import { getSliderProps } from "@/lib/queries";



export default async function Home() {
  const sliderPages = await getSliderProps();
  return (
    <div>
      
      <SliderM sliderPages={sliderPages} /> 
      
      
    </div>
  );
}
