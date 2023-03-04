import styles from "@/styles/Home.module.css";
import { Entry } from "contentful";
import { TCompanyExperience } from "@/types/contentful.type";
import Image from "next/image";

interface IExperience {
  workExperience: Entry<TCompanyExperience>;
}
const Experience = ({ workExperience }: IExperience) => {
  const {
    fields: {
      companyName,
      timeSpend,
      description,
      link,
      preview: {
        fields: {
          file: { url, title },
        },
      },
    },
  } = workExperience;

  return (
    <div className={styles.card}>
      <h2>
        <span>
          {`${timeSpend} years in `}
          <a href={link}>{companyName}</a>
        </span>
      </h2>
      <Image height={1000} width={2000} src={`https:${url}`} alt={title} />
      <p>&nbsp;{`${description}`}</p>
    </div>
  );
};

export default Experience;
