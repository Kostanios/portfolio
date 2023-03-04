import Image from "next/image";
import React from "react";

interface IContactIcon {
  path: string;
  alt: string;
  title: string;
  link: string;
}
const ContactIcon: React.FC<IContactIcon> = ({ path, alt, title, link }) => (
  <a href={link}>
    <Image width={18} height={18} src={path} alt={alt} title={title} />
  </a>
);

export default ContactIcon;
