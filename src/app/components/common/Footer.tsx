import React from 'react'
import styles from '../../[locale]/page.module.css'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('Footer')
  return (
    <footer className={styles.FooterContainer}>
      <span className={styles.FooterLine}></span>
      <p className={styles.FooterText}>{t('title')}<span> Joseph Omar Meza Torres</span></p>
    </footer>
  )
}

export default Footer