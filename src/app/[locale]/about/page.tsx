import CardExperience from "@/app/components/common/CardExperience";
import React from "react";
import styles from "./about.module.css";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations('About')
  const t1 = useTranslations('WorkExperience')
  const t2 = useTranslations('Education')
  return (
    <main className={styles.aboutContainer}>
      <section className={styles.sectionAbout}>
        <h2>{t('title')}</h2>
        <p>
          {t('description')}
        </p>
      </section>
      <section className={styles.sectionExperience}>
        <h2>{t1('title')}</h2>
        <div className={styles.allExperiences}>
          <CardExperience
            title={t1('workstation1')}
            company="Aventur Travel"
            place="Lima"
            date={t1('date1')}
          />
          <CardExperience
            title={t1('workstation2')}
            company="Concentrix"
            place="Lima"
            date={t1('date2')}
          />
        </div>
      </section>
      <section className={styles.sectionEducation}>
        <h2>{t2('title')}</h2>
        <div className={styles.allExperiences}>
          <CardExperience
            title={t2('profession1')}
            company="IESTP Carlos Cueto Fernandini"
            place="Lima"
            date={t2('date1')}
          />
          <CardExperience
            title={t2('profession2')}
            company="UNMSM"
            place="Lima"
            date={t2('date2')}
          />
        </div>
      </section>
    </main>
  );
};

export default About;
