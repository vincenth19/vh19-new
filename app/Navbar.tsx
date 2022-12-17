import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IURL } from "../types";

const MENUS: IURL[] = [
  // {
  //   label: "Home",
  //   url: "/",
  // },
  // {
  //   label: "Projects",
  //   url: "/projects",
  // },
  // {
  //   label: "Blogs",
  //   url: "/blogs",
  // },
];

type TNavbar = {
  toggleDark: () => void;
};

const Navbar: FC<TNavbar> = ({ toggleDark }) => {
  return (
    <>
      <div className="bg-white w-full shadow-lg flex justify-center h-[60px] dark:bg-slate-800 dark:text-white">
        <div className="p-4 w-full lg:max-w-screen-lg flex justify-between ">
          <span className={MENUS.length > 0 ? "block lg:hidden" : "hidden"}>
            <Image
              width={24}
              height={24}
              src={"/menu-2-line.svg"}
              alt={"hamburger-menu-icon"}
            />
          </span>
          <h1 id="my-name">Vincent Haryadi</h1>

          {MENUS.length > 0 && (
            <span className="hidden sm:block">
              {MENUS.map((data) => {
                return (
                  <span key={data.label} className="px-7">
                    <Link href={data.url}>{data.label}</Link>
                  </span>
                );
              })}
            </span>
          )}

          <button onClick={toggleDark} id="btn-dark-mode-toggle">
            <Image
              src={"/moon-line.svg"}
              width={24}
              height={24}
              alt="dark-mode-moon-icon"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
