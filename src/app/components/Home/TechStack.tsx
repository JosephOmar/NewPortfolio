import React from 'react'
import styles from '../../[locale]/page.module.css'
import { HTMLLogo } from '../SVGS/HTMLLogo'
import { JavaScriptLogo } from '../SVGS/JavaScriptLogo'
import CSSSvg from '../SVGS/CSSSvg'
import ReactLogo from '../SVGS/ReactLogo'
import {TailwindLogo} from '../SVGS/TailwindLogo'
import {NextLogo} from '../SVGS/NextLogo'
import { NestLogo } from '../SVGS/NestLogo'
import { AstroLogo } from '../SVGS/AstroLogo'
import { PostgreLogo } from '../SVGS/PostgreLogo'
import { DockerLogo } from '../SVGS/DockerLogo'
import { AWSLogo } from '../SVGS/AWSLogo'
import { GitLogo } from '../SVGS/GitLogo'
import { PythonLogo } from '../SVGS/PythonLogo'
import TypeScriptLogo from '../SVGS/TypeScriptLogo'
import { useTranslations } from 'next-intl'

const TechStack = () => {
  const t = useTranslations('Tech')
  return (
    <section className={styles.TechStackContainer}>
      <h2>{t('title')}</h2>
      <h3>{t('description')}</h3>
      <ul className={styles.TechList}>
        <li><HTMLLogo className={styles.TechItem}/></li>
        <li><JavaScriptLogo className={styles.TechItem}/></li>
        <li><CSSSvg className={styles.TechItem}/></li>
        <li><TypeScriptLogo className={styles.TechItem}/></li>
        <li><ReactLogo className={styles.TechItem}/></li>
        <li><TailwindLogo className={styles.TechItem}/></li>
        <li><NextLogo className={styles.TechItem}/></li>
        <li><NestLogo className={styles.TechItem}/></li>
        <li><AstroLogo className={styles.TechItem}/></li>
        <li><PythonLogo className={styles.TechItem}/></li>
        <li><PostgreLogo className={styles.TechItem}/></li>
        <li><DockerLogo className={styles.TechItem}/></li>
        <li><AWSLogo className={styles.TechItem}/></li>
        <li><GitLogo className={styles.TechItem}/></li>
      </ul>
    </section>
  )
}

export default TechStack
