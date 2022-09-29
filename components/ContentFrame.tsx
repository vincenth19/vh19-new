import { FC } from "react";

const ContentFrame: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="flex justify-center ">
      <div className=" w-full lg:max-w-screen-lg p-4">{children}</div>
    </div>
  );
};

export default ContentFrame;
