export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price?: number;
  priceRange?: {
    min: number;
    max: number;
  };
  category: string;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  features: string[];
  isPopular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon?: React.ComponentType;
}

export interface Testimonial {
  id: string;
  author: string;
  business: string;
  content: string;
  rating: number; // 1-5
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  imageUrl: string;
  category: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}
