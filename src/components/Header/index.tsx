import styles from "@/styles/Home.module.css";
import Contacts from "@/components/Contacts";
import { Entry } from "contentful";
import { TContact } from "@/types/contentful.type";

interface IHeader {
  contacts: Entry<TContact>[];
  cvLink: string;
}
const Header = ({ contacts, cvLink }: IHeader) => (
  <header className={styles.header}>
    <nav>
      <a href="#summery">My</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a download={cvLink} href="">
        CV file
      </a>
    </nav>
    <Contacts contacts={contacts} />
  </header>
);

export default Header;
