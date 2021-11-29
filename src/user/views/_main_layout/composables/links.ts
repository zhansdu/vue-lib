type link = {
  name: string;
  src: string;
  target?: string;
  dropdown?: {
    links: Array<link>;
  };
};
export const links: Array<link> = [
  {
    name: "Example",
    src: "http://example:8000/example",
  },
];
