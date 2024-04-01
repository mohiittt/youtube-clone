import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

const Sidebar = () => {
  const mainLinks = [
    {
      icon: <IoMdHome />,
      name: "Home",
    },
    {
      icon: <SiYoutubeshorts />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions />,
      name: "Subscription",
    },
  ];

  const otherLinks = [
    {
      icon: <MdOutlineVideoLibrary />,
      name: "Library",
    },
    {
      icon: <MdHistory />,
      name: "History",
    },
    {
      icon: <MdOutlineWatchLater />,
      name: "Watch Later",
    },
    {
      icon: <AiOutlineLike />,
      name: "Liked Video",
    },
    {
      icon: <IoSettingsOutline />,
      name: "Settings",
    },
    {
      icon: <MdHelpOutline />,
      name: "Help",
    },
    {
      icon: <MdOutlineFeedback />,
      name: "Send Feedback",
    },
  ];

  const contactLink = [
    {
      icon: <VscAccount />,
      name: "Mohit Patil",
    },
  ];

  return (
    <div className="w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen mt-1">
      <ul className="flex flex-col border-b-2 border-gray-800">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-zinc-700 ${
                name === "Home" ? "bg-zinc-600" : " "
              } rounded-xl`}
            >
              <a href="#" className="flex items-center gap-5 text-xl">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="flex flex-col border-b-2 border-gray-800">
        {otherLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-700 rounded-xl`}>
              <a href="#" className="flex items-center gap-5 text-xl">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="flex flex-col border-b-2 border-gray-800">
        {contactLink.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-700 rounded-xl`}>
              <a
                href="https://mohitp-portfolio.netlify.app/"
                className="flex items-center gap-5 text-xl"
              >
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
