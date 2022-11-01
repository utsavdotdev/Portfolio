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
    name: "Utsav Bhattarai",
    accounts: [
      {
        url: "https://www.linkedin.com/in/utsavbhattarai007",
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
        url: "https://twitter.com/utsabdev",
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
