import React from 'react'
import styles from '../../[locale]/about/about.module.css'
import PointLogo from '../SVGS/PointLogo'
import CompanyLogo from '../SVGS/CompanyLogo'
import CalendarLogo from '../SVGS/CalendarLogo'
import Experience from '../Home/Experience'

interface Experience{
  title: string,
  company: string,
  place:string,
  date: string
}

const CardExperience: React.FC<Experience> = ({title,company,place,date}) => {
  return (
    <article className={styles.experienceContainer}>
      <div className={styles.experiencePosition}>
        <h4>{title}</h4>
      </div>
      <div className={styles.experienceInfo}>
        <div className={styles.experiencePlace}>
          <p><CompanyLogo />{company}</p>
          <p><PointLogo />{place}</p>
        </div>
        <p><CalendarLogo />{date}</p>
      </div>
      <span className={styles.separation}></span>
    </article>
  )
}

export default CardExperience