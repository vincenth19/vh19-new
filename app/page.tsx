import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import { TProfileLinks } from "../types";

const Home: NextPage = () => {
  return (
    <div>
      <style jsx>
        {`
          .height {
            height: calc(100vh - 100px);
          }
        `}
      </style>
      <Head>
        <title>Vincent Haryadi</title>
        <meta
          name="description"
          content="Vincent Haryadi Front-end Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-2 gap-4 grid-rows-1">
        <div className="py-4 lg:border-r-2 w-max">
          <LeftColumn />
        </div>
        <hr className="block lg:hidden" />
        <div className="col-span-2 py-4 lg:px-4 w-100">col 2</div>
      </div>
    </div>
  );
};

const PROFILE_LINKS: TProfileLinks[] = [
  {
    label: "GitHub",
    url: "https://github.com/vincenth19",
    icon: "/github-fill.svg",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/vincenth19",
    icon: "/linkedin-box-fill.svg",
  },
  {
    label: "Instagram",
    url: "https://instagram.com/vincenth19",
    icon: "/instagram-line.svg",
  },
];
const LeftColumn: FC = () => {
  return (
    <>
      <div>
        <Image
          id="myProfPic"
          src={"/myIllustration.svg"}
          width={24}
          height={24}
          alt={"my-illustration"}
        />
      </div>
      <div>
        <h1 id="myNameHome" className="text-3xl font-bold">
          Vincent Haryadi
        </h1>
      </div>
      <div id="description" className="text-gray-500 mt-4">
        <p>Front-end developer at heart</p>
        <p>Jakarta, Indonesia 🇮🇩</p>
      </div>
      <div className="flex py-4">
        {PROFILE_LINKS.map((data) => {
          return (
            <a key={data.url} href={data.url} target="_blank">
              <span className="mr-6 flex align-middle text-green-700">
                <Image
                  src={data.icon}
                  width={24}
                  height={24}
                  alt={`${data.label}-icon-image`}
                />
                <text id="linkLabel" className="ml-2">
                  {data.label}
                </text>
              </span>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Home;
