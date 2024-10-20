import React from "react";
import CardProject from "../common/CardProject";
import styles from "../../[locale]/page.module.css";
import { NextLogo } from "../SVGS/NextLogo";
import TypeScriptLogo from "../SVGS/TypeScriptLogo";
import ReactLogo from "../SVGS/ReactLogo";
import { TailwindLogo } from "../SVGS/TailwindLogo";
import { NestLogo } from "../SVGS/NestLogo";
import { PostgreLogo } from "../SVGS/PostgreLogo";
import { AstroLogo } from "../SVGS/AstroLogo";
import { JavaScriptLogo } from "../SVGS/JavaScriptLogo";
import { useTranslations } from "next-intl";

const TechAsianAllDesing = [
  { name: "Next", icon: <NextLogo width={20} height={20} /> },
  { name: "TypeScript", icon: <TypeScriptLogo width={20} height={20} /> },
  { name: "React", icon: <ReactLogo width={20} height={20} /> },
  { name: "Tailwind", icon: <TailwindLogo width={20} height={20} /> },
  { name: "Nest", icon: <NestLogo width={20} height={20} /> },
  { name: "Postgre", icon: <PostgreLogo width={20} height={20} /> },
];

const TechAventurTravel = [
  { name: "Astro", icon: <AstroLogo width={20} height={20} /> },
  { name: "JavaScript", icon: <JavaScriptLogo width={20} height={20} /> },
  { name: "Tailwind", icon: <TailwindLogo width={20} height={20} /> },
  { name: "Nest", icon: <NestLogo width={20} height={20} /> },
  { name: "Postgre", icon: <PostgreLogo width={20} height={20} /> },
];

const Projects = () => {
  const t = useTranslations('Projects')
  const t1 = useTranslations('Project1')
  const t2 = useTranslations('Project2')
  return (
    <section className={styles.ProjectContainer}>
      <h2>{t('title')}</h2>
      <div className={styles.ProjectsList}>
        <CardProject
          projectType={t1('title')}
          title="Asian All Design"
          description={t1('description')}
          image="/images/AsianAllDesign.webp"
          imageAlt="Asian All Design"
          techStack={TechAsianAllDesing}
          linkGitHub="https://github.com/JosephOmar/AsianAllDesign"
          linkPage="https://asianalldesigns.com/"
          reverseLayout={false}
        />
        <CardProject
          projectType={t2('title')}
          title="Aventur Travel"
          description={t2('description')}
          image="/images/AventurTravel.webp"
          imageAlt="AventurTravel"
          techStack={TechAventurTravel}
          linkGitHub="https://github.com/JosephOmar/AventurTravelWeb"
          linkPage="https://aventurtravelperu.com/"
          reverseLayout={true}
        />
      </div>
    </section>
  );
};

export default Projects;
