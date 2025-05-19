import Link from "next/link";
import { WPPage } from "@/lib/types";

export async function SliderPage({ categories }: { categories: WPPage[] }) {
  return <div>{JSON.stringify(categories)}</div>;
}
