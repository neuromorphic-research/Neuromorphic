/** Founder contact rows for the site. LinkedIn for Özgür was not public; `website` is used. */
export type Founder = {
  name: string;
  role: string;
  email: string;
  linkedin: string;
  website?: string;
  image: string;
};

export const founders: Founder[] = [
  {
    name: "Cem Seref Toker",
    role: "Co-Founder",
    email: "cst41@cam.ac.uk",
    linkedin: "https://www.linkedin.com/in/cem-seref-toker-823077237/",
    image: "/founders/cem-seref-toker.jpg",
  },
  {
    name: "Ege Doganay",
    role: "Co-Founder",
    email: "ege.doganay03@gmail.com",
    linkedin: "https://www.linkedin.com/in/ege-do%C4%9Fanay-175336258/",
    image: "/founders/ege-doganay.jpg",
  },
  {
    name: "Ozgur Soysal",
    role: "Co-Founder",
    email: "soysal@stanford.edu",
    linkedin: "",
    website: "https://ozgursoysal.com/",
    image: "/founders/ozgur-soysal.jpg",
  },
  {
    name: "Vatan Aksoy Tezer",
    role: "Co-Founder",
    email: "vatanaksoytezer@gmail.com",
    linkedin: "https://www.linkedin.com/in/vatanaksoytezer/",
    image: "/founders/vatan-aksoy-tezer.jpg",
  },
];
