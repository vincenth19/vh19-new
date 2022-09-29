import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import ContentFrame from "../components/ContentFrame";
import Navbar from "../components/Navbar";
import { TProfileLinks } from "../types";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vincent Haryadi</title>
        <meta
          name="description"
          content="Vincent Haryadi Front-end Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ContentFrame>
        <div className="grid grid-cols-3 gap-4 grid-rows-1">
          <div className="border-r-2">
            <LeftColumn />
          </div>
          <div className="col-span-2">col 2</div>
        </div>
      </ContentFrame>
    </div>
  );
};

const PROFILE_LINKS: TProfileLinks[] = [
  {
    label: "GitHub",
    url: "https://github.com/vincenth19",
    icon: "/moon-line.svg",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/vincenth19",
    icon: "/moon-line.svg",
  },
  {
    label: "Instagram",
    url: "https://instagram.com/vincenth19",
    icon: "/moon-line.svg",
  },
];
const LeftColumn: FC = () => {
  return (
    <>
      <div>
        <p>profile pic</p>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Vincent Haryadi</h1>
      </div>
      <div className="text-gray-500 mt-4">
        <p>Front-end developer at heart</p>
        <p>Jakarta, Indonesia</p>
      </div>
      <div>
        {PROFILE_LINKS.map((data) => {
          return (
            <Link href={data.url}>
              <span className="mr-4">
                {/* <Image src={data.icon} width={24} height={24} /> */}
                <text>{data.label}</text>
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
