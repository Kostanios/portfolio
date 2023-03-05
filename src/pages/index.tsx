import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import { GetServerSideProps } from "next";
import { getAllContentByModelTypeId } from "@/services/contentful";
import {
  TCompanyExperience,
  TContact,
  TMy,
  TSkill,
  TTypeId,
} from "@/types/contentful.type";
import { Entry, EntryCollection } from "contentful";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export const getServerSideProps: GetServerSideProps = async () => {
  const [workExperiences, skills, contacts, my] = await Promise.all([
    getAllContentByModelTypeId<TCompanyExperience>(TTypeId.CompanyExperience),
    getAllContentByModelTypeId<TSkill>(TTypeId.Skill),
    getAllContentByModelTypeId<TContact>(TTypeId.Contact),
    getAllContentByModelTypeId<TMy>(TTypeId.My),
  ]);

  const props: IHomeProps = {
    workExperiences,
    skills,
    contacts,
    my: my.items[0],
  };

  return {
    props,
  };
};

interface IHomeProps {
  workExperiences: EntryCollection<TCompanyExperience>;
  skills: EntryCollection<TSkill>;
  contacts: EntryCollection<TContact>;
  my: Entry<TMy>;
}

export default function Home({
  workExperiences,
  skills,
  contacts,
  my,
}: IHomeProps) {
  return (
    <>
      <Head>
        <title>{my.fields.name}</title>
        <meta
          name="description"
          content={`${my.fields.name} portfolio - ${skills.items.map(
            (skill) => ` ${skill.fields.name} developer`
          )}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={my.fields.avatar.fields.file.url} />
      </Head>
      <main className={styles.main}>
        <Header
          cvLink={my.fields.cv.fields.file.url}
          contacts={contacts.items}
        />
        <section id="summery" className={styles.summery}>
          <div>
            <p>&nbsp;{my.fields.summery}</p>
            <img
              className={styles.avatar}
              src={`http:${my.fields.avatar.fields.file.url}`}
              alt={my.fields.name}
            />
          </div>
        </section>
        <section id="skills">
          <div className={styles.stacks}>
            <h1>The technologies I use</h1>
            <Skills skills={skills.items} />
          </div>
        </section>

        <section id="experience">
          <div className={styles.center}>
            <h3 className={styles.thirteen}>Work Experience</h3>
          </div>

          {workExperiences.items.map((workExperience) => {
            return (
              <Experience
                key={workExperience.sys.id}
                workExperience={workExperience}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}
