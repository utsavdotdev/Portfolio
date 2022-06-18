import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const social = {
  copyright: `Copyright © ${new Date().getFullYear()} Utsav Bhattarai. All Rights Reserved.`,
  author: {
    name: "El Midaoui Ziad",
    accounts: [
      {
        url: "https://www.linkedin.com/in/el-midaoui-ziad/",
        name: "LinkedIn",
        type: "linkedin",
        icon: <FaLinkedin />,
      },
      {
        url: "https://github.com/utsavbhattarai007",
        name: "Github",
        type: "gray",
        icon: <FaGithub />,
      },
      {
        url: "mailto:utsavbhattarai007@gmail.com",
        name: "Mail",
        type: "red",
        icon: <FiMail />,
      },
      {
        url: "https://twitter.com/utsavbhatrai007",
        name: "Twitter",
        type: "twitter",
        icon: <FaTwitter />,
      },
      {
        url: "https://stackoverflow.com/users/18668200/utsav-bhattarai",
        name: "Stack Overflow",
        type: "orange",
        icon: <FaStackOverflow />,
      },
    ],
  },
};

export default social;
