import Image from "next/image";
import { SliderPage } from "@/components/Slider";
import { getPages } from "@/lib/queries";

export default async function Home() {
  const SliderPage = await getPages();
  return (
    <div>
      <h1 className="text-xl text-red-500 bg-white inline-block">
        Hi the Tailwind is working
      </h1>
      <Slider SliderPage={SliderPage} />
    </div>
  );
}
