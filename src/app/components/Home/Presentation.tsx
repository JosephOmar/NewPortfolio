import React from "react";
import styles from "../../[locale]/page.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Presentation = () => {
  const t = useTranslations('Presentation')
  return (
    <section className={styles.PresentationContainer}>
      <div className={styles.PresentationText}>
        <p>{t('presentation1')}</p>
        <p>{t('presentation2')}</p>
        <p>{t('presentation3')}</p>
        <p>{t('presentation4')}</p>
      </div>
      <div className={styles.Border}>
        <Image
          className={styles.PresentationImage}
          src="/images/profile.webp"
          width={310}
          height={310}
          alt="Profile Image"
        />
      </div>
    </section>
  );
};

export default Presentation;
