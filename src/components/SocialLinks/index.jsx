import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Link, List, ListItem } from "./styles";

export const social_icons = [
  {
    id: 1,
    title: "Email me",
    icon: <FaEnvelope />,
    url: "mailto:andrew_workstation@hotmail.com",
  },
  {
    id: 2,
    title: "GitHub",
    icon: <FaGithubSquare />,
    url: "https://github.com/AndrewCrescencio",
  },
  {
    id: 3,
    title: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/andrewcrescencio/",
  },
];

export const SocialLinks = () => {
  return (
    <List>
      {social_icons.map((link) => {
        return (
          <ListItem key={link.id}>
            <Link href={link.url} target="_blank">
              {React.cloneElement(link.icon, {
                title: link.title,
              })}
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};
