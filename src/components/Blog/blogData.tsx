import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  // {
  //   id: 1,
  //   title: "Best UI components for modern websites",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-01.jpg",
  //   author: {
  //     name: "Samuyl Joshi",
  //     image: "/images/blog/author-03.png",
  //     designation: "Graphic Designer",
  //   },
  //   tags: ["creative"],
  //   publishDate: "2025",
  // },
  {
    id: 2,
    title: "How to import from Japan to Australia",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Rayan Khan",
      image: "/images/blog/author-02.png",
      designation: "Owner",
    },
    tags: ["computer"],
    publishDate: "12-09-2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
