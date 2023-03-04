import React from "react";
import { TSkill } from "@/types/contentful.type";
import { Entry } from "contentful";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

interface ISkills {
  skills: Entry<TSkill>[];
}

export const Skills: React.FC<ISkills> = ({ skills }) => {
  return (
    <div className={styles.grid}>
      {skills.map((skill) => {
        return (
          <div
            title={skill.fields.name}
            className={styles["grid-item"]}
            key={skill.sys.id}
          >
            <Image
              width={80}
              height={80}
              src={skill.fields.icon.fields.file.url}
              alt={skill.fields.name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
