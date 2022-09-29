import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type URL = {
  label: string;
  url: string;
};

const URLS: URL[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Projects",
    url: "/projects",
  },
  {
    label: "Blogs",
    url: "/blogs",
  },
];

const Navbar: FC = () => {
  return (
    <>
      <div className="bg-white w-full shadow-lg flex justify-center">
        {/* dark:bg-slate-800 */}
        {/* my name */}

        <div className="p-4 w-full lg:max-w-screen-lg flex justify-between ">
          <span className="block lg:hidden">
            <Image width="24px" height={24} src={"/menu-2-line.svg"} />
          </span>
          <h1 className="hidden lg:block">Vincent Haryadi</h1>

          <span className="hidden sm:block">
            {URLS.map((data) => {
              return (
                <span className="px-7">
                  <Link href={data.url}>{data.label}</Link>
                </span>
              );
            })}
          </span>
          <button>
            <Image src={"/moon-line.svg"} width="24px" height="24px" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
