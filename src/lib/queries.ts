import { WPPage } from "@/lib/types";

const baseUrl = process.env.WORDPRESS_URL;

export async function getPages(): Promise<WPPage> {
  const response = await fetch(
    `${baseUrl}//wp-json/wp/v2/pages?slug=slider-beginner`
  );
  const data: WPPage[] = await response.json();
  return data[0];
}
