export type WPPage = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: "page";
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: {
    inline_featured_image: boolean;
    footnotes: string;
  };
  yoast_head: string;
  yoast_head_json: {
    title: string;
    robots: {
      index: string;
      follow: string;
      "max-snippet": string;
      "max-image-preview": string;
      "max-video-preview": string;
    };
    og_locale: string;
    og_type: string;
    og_title: string;
    og_url: string;
    og_site_name: string;
    twitter_card: string;
    schema: {
      "@context": string;
      "@graph": any[];
    };
  };
  acf: {
    modules: SliderModule[];
  };
};

export type SliderModule = {
  acf_fc_layout: "slider_beginner";
  acfe_flexible_toggle?: string;
  acfe_flexible_layout_title?: string;
  headline: string;
  subtitle: string;
  slides: SlideWP[];
};

export type SlideWP = {
  title: string;
  text: string;
  images: {
    image: number;
  }[];
  imageUrls?: string[];
};

export interface ImageProps {
  height: number
  width: number
  url: string
}

export interface Slide {
  title: string;
  subtitle: string;
  image1: ImageProps;
  image2: ImageProps;
}

export interface SliderProps {
  headline: string | undefined;
  subline: string | undefined;
  slides: Slide[] | undefined;
}
