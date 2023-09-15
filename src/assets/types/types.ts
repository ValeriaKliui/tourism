export type Destination = {
  id: number;
  name: string;
  duration: string;
  info: string;
  src: string;
};
export type Testimonial = {
  name: string;
  src: string;
  text: string;
  id: number;
};

export const enum TypeArticle {
  beach = "beach",
  explore_world = "Explore World",
  family_holidays = "Family Holidays",
  art_and_culture = "Art and culture",
}
export type Article = {
  title: string;
  src: string;
  id: number;
  date: string;
  type: TypeArticle[];
};
