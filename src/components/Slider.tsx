import Link from "next/link";
import Image from "next/image";
import { SliderProps } from "@/lib/types";

export async function Slider({ sliderPages }: { sliderPages: SliderProps }) {
  return (
    <div className="bg-pink-200 mx-20 my-20 min-h-screen px-12 py-16 font-sans text-black relative">
      
    
      <div className="flex flex-col inline-blocck :flex-row justify-between items-start md:items-center mb-12">
        <h1 className="text-6xl font-extrabold uppercase">Haus of Honey</h1>
        <p className="text-xl tracking-widest uppercase mt-4 md:mt-0">
          Discover the Families
        </p>
      </div>

      
      <div className="flex flex-col md:flex-row justify-start items-start gap-10">
        
        {sliderPages.slides?.[0]?.image1?.url && (
          <div className="bg-black p-1 mx-40">
            <Image
              src={sliderPages.slides[0].image1.url}
              alt=""
              width={sliderPages.slides[0].image1.width || 100}
              height={sliderPages.slides[0].image1.height || 200}
              className="object-cover"
            />
          </div>
        )}

        
        {sliderPages.slides?.[1]?.image2?.url && (
          <div className="bg-blue-300 p-1">
            <Image
              src={sliderPages.slides[1].image2.url}
              alt=""
              width={sliderPages.slides[1].image2.width || 200}
              height={sliderPages.slides[1].image2.height || 400}
              className="object-cover"
            />
          </div>
        )}
      </div>

     
      <div className="flex justify-between items-end mt-12">
        
        <div>
          <p className="text-md max-w-sm">
            The Haus of Honey line is a revolution in the imaginative world of heels.
          </p>
          <p className="text-2xl font-extrabold mt-2 uppercase">
            Honey Bubble
          </p>
        </div>

       
        <div className="text-lg tracking-wide">01 - 04</div>
      </div>

     
      <div className="absolute top-16 right-12 text-3xl font-thin">
        →  
      </div>
    </div>
  );
}
