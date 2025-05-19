import { Slide, SliderProps, WPPage } from "@/lib/types";

const baseUrl = process.env.WORDPRESS_URL;

export async function getSliderProps(): Promise<SliderProps> {
  const response = await fetch(
    `${baseUrl}/wp-json/wp/v2/pages?slug=slider-beginner`
  );
  const data = await response.json() as WPPage[];
  const pageData = data[0];
  const sliderModule = pageData.acf.modules.find((module)=>
      module.acf_fc_layout === "slider_beginner"
  )
  const slidesData = sliderModule?.slides?.map(async (slide) => {
    const imageID1 = slide.images[0]?.image;
    const imageID2 = slide.images[1]?.image;
  
    // Sichere Behandlung von fehlenden Bild-IDs
    const imageUrl1Promise = imageID1
    ? fetch(`${baseUrl}/wp-json/wp/v2/media/${imageID1}`)
        .then(res => res.json())
        .then(data => ({
          url: data.source_url,
          width: data?.media_details?.width, // Zugriff auf width über media_details
          height: data?.media_details?.height, // Zugriff auf height über media_details
        }))
    : Promise.resolve(undefined);

    const imageUrl2Promise = imageID2
    ? fetch(`${baseUrl}/wp-json/wp/v2/media/${imageID2}`)
        .then(res => res.json())
        .then(data => ({
          url: data.source_url,
          width: data?.media_details?.width, // Zugriff auf width über media_details
          height: data?.media_details?.height, // Zugriff auf height über media_details
        }))
    : Promise.resolve(undefined);






  
    // const imageUrl2Promise = imageID2
     // ? fetch(`${baseUrl}/wp-json/wp/v2/media/${imageID2}`).then(res => res.json()).then(data => data.source_url)
     // : Promise.resolve(undefined); // Oder ein anderer Standardwert
  
    const [imageUrl1, imageUrl2] = await Promise.all([imageUrl1Promise, imageUrl2Promise]);
  
    return {
      title: slide.title,
      subtitle: slide.text,
      image1: imageUrl1 ? { url: imageUrl1.url, width: imageUrl1.width, height: imageUrl1.height } : undefined,
      image2: imageUrl2 ? { url: imageUrl2.url, width: imageUrl2.width, height: imageUrl2.height } : undefined,
    } as Slide;
  });
  
  const slides = await Promise.all(slidesData || []);
  
  return {
    headline: sliderModule?.headline,
    subline: sliderModule?.subtitle,
    slides: slides
  };
}
