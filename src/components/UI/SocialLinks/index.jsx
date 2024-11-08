import React from "react";
import { IconEnvelopeAt } from "@/components/icons/EnvelopeAt";
import { IconLinkedin } from "@/components/icons/Linkedin";
import { IconWhatsapp } from "@/components/icons/Whatsapp";
import { IconGithub } from "@/components/icons/Github";

import { Link, List, ListItem } from "./styles";

export const social_icons = [
  {
    id: 4,
    title: "WhatsApp",
    icon: <IconWhatsapp />,
    url: "https://wa.me/+5511939475095/",
  },
  {
    id: 1,
    title: "Email me",
    icon: <IconEnvelopeAt />,
    url: "mailto:mail@andrewcrescencio.com",
  },
  {
    id: 2,
    title: "GitHub",
    icon: <IconGithub />,
    url: "https://github.com/AndrewCrescencio",
  },
  {
    id: 3,
    title: "LinkedIn",
    icon: <IconLinkedin />,
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
