import React from "react";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";

interface Post {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  date: string;
  comments: string;
}

const postsData: Post[] = [
  {
    id: 1,
    imageSrc: "/images/post-1.svg",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
  {
    id: 2,
    imageSrc: "/images/post-2.svg",
    title: "Loudest à la Madison #2 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "23 April 2021",
    comments: "15 comments",
  },
  {
    id: 3,
    imageSrc: "/images/post-3.svg",
    title: "Loudest à la Madison #3 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "24 April 2021",
    comments: "8 comments",
  },
];

const FeaturedPosts: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-12 p-6 md:px-24 md:py-12 mx-auto">
      <div className="flex flex-col gap-6 text-center">
        <p className="font-montserrat text-sm font-bold leading-6 text-blue-500">
          Practice Advice
        </p>
        <h2 className="font-montserrat text-4xl font-bold leading-10 text-gray-900">
          Featured Posts
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
        {postsData.map((post) => (
          <div
            key={post.id}
            className="flex flex-col gap-5 bg-white shadow-md w-full md:w-[348px] h-auto"
          >
            <div
              className="relative bg-cover bg-center w-full h-[300px] overflow-hidden"
              style={{
                backgroundImage: `url(${post.imageSrc})`,
              }}
            >
              <div className="absolute top-5 left-5 py-1 px-4 bg-red-500 text-white text-center text-sm font-bold rounded shadow-md">
                New
              </div>
            </div>

            <div className="flex flex-col p-[25px_25px_35px_25px] gap-4">
              <div className="flex gap-3 text-sm">
                <p className="text-blue-300">Google</p>
                <p className="text-gray-500">Trending</p>
                <p className="text-gray-500">New</p>
              </div>

              <h2 className="font-montserrat text-xl font-normal leading-7 text-gray-900">
                {post.title}
              </h2>

              <p className="font-montserrat text-sm font-normal leading-5 text-gray-500">
                {post.description}
              </p>

              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/images/clock.png"
                    height={16}
                    width={16}
                    alt="calendar"
                    className="w-4 h-4"
                  />
                  <p className="text-gray-500 text-sm">{post.date}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src="/images/chart.png"
                    height={16}
                    width={16}
                    alt="comments"
                    className="w-4 h-4"
                  />
                  <p className="text-gray-500 text-sm">{post.comments}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 cursor-pointer text-blue-500 ">
                <p className="font-montserrat text-sm font-bold leading-6">
                  Learn More
                </p>
                <RiArrowRightSLine size={20} color="#23A6F0 mt-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
