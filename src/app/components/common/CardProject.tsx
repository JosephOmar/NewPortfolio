import React from 'react'
import styles from '../../[locale]/page.module.css'
import Image from 'next/image'
import GitHubSvg from '../SVGS/GitHubSvg'
import WebLogo from '../SVGS/WebLogo'

interface TechSVG{
  name: string,
  icon: JSX.Element;
}

interface ProjectProps{
  projectType: string,
  title: string,
  description: string,
  image: string,
  imageAlt: string,
  techStack: TechSVG[],
  linkGitHub: string,
  linkPage: string,
  reverseLayout?: boolean; 
}

const CardProject: React.FC<ProjectProps> = ({projectType, title, description, image, imageAlt, techStack, linkGitHub, linkPage, reverseLayout }) => {
  return (
    <article className={`${styles.ProjectCardContainer} ${reverseLayout ? styles.reverse : ''}`}>
      <div className={styles.ProjectCardText}>
        <h4>{projectType}</h4>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <ul className={styles.ProjectStack}>
            {
              techStack.map((item, index) => (
                <li key={index}>{item.icon}</li>
              ))
            }
          </ul>
        </div>
        <div className={styles.ProjectLinks}>
          <a href={linkGitHub} target='_blank'><GitHubSvg width={28} height={28}  fill='#fff'/></a>
          <a href={linkPage} target='_blank'><WebLogo width={32} height={32} fill='#fff'/></a>
        </div>
      </div>
      <div className={styles.ProjectImageContainer}>
        <Image src={image} width={480} className={styles.ProjectImage} height={270} alt={imageAlt}/>
      </div>
    </article>
  )
}

export default CardProject