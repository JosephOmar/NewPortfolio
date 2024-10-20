"use client";
import React, { useState } from "react";
import styles from "../../[locale]/page.module.css";
import GitHubSvg from "../SVGS/GitHubSvg";
import LinkedInSvg from "../SVGS/LinkedInSvg";
import XSvg from "../SVGS/XSvg";
import Image from "next/image";
import MenuLogo from "../SVGS/MenuLogo";
import CloseLogo from "../SVGS/CloseLogo";
import { Link } from "@/i18n/routing";
import UsaLogo from "../SVGS/UsaLogo";
import SpainLogo from "../SVGS/SpainLogo";
import { useRouter } from "next/navigation";

interface NavbarProps {
  title: string;
  about: string;
}

const Navbar = ({ title, about }: NavbarProps) => {
  const [openDropMenu, setOpenDropMenu] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const router = useRouter();

  const handleClick = () => {
    const selectElement = document.getElementById(
      "language-select"
    ) as HTMLElement | null;
    if (selectElement) {
      selectElement.classList.toggle("show");
    }
  };

  const changeLanguaje = (lang: string) => {
    setSelectedLanguage(lang)
    router.replace(`/${lang}`);
    console.log(lang)
  }

  return (
    <nav className={styles.NavContainer}>
      <div className={styles.NavLogo}>
        <Image
          src="images/JosephMT.svg"
          alt="Logo JosephMT"
          width={90}
          height={20}
        />
        <div className="custom-select">
          <div className="selected-option" onClick={() => handleClick()}>
            {selectedLanguage === "es" ? <SpainLogo /> : <UsaLogo />}
          </div>
          <div id="language-select" className="options">
            <div onClick={() => changeLanguaje('es')} className="option">
              <SpainLogo />
            </div>
            <div onClick={() => changeLanguaje('en')} className="option">
              <UsaLogo />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.NavItems}>
        <ul className={styles.ListItems}>
          <li>
            <Link href="/">{title}</Link>
          </li>
          <li>
            <Link href="/about">{about}</Link>
          </li>
        </ul>
        <ul className={styles.ListSocial}>
          <li>
            <Link href="https://github.com/JosephOmar" target="_blank">
              <GitHubSvg fill="000" />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/JosephMTDev" target="_blank">
              <XSvg fill="000" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/joseph-omar-meza-torres-911515330/"
              target="_blank"
            >
              <LinkedInSvg />
            </Link>
          </li>
        </ul>
      </div>
      <section className={styles.DropMenu}>
        <div className={styles.DropMenuButton}>
          <MenuLogo
            onClick={() => setOpenDropMenu(true)}
            style={{ display: openDropMenu ? "none" : "block" }}
          />
        </div>
        <div className={styles.DropMenuButton}>
          <CloseLogo
            onClick={() => setOpenDropMenu(false)}
            style={{ display: openDropMenu ? "block" : "none" }}
          />
        </div>
      </section>
      {openDropMenu ? (
        <div className={styles.OpenDropMenu} style={{ height: "50vh" }}>
          <div className={styles.NavItemsDrop}>
            <ul className={styles.ListItemsDrop}>
              <li>
                <Link href="/" onClick={() => setOpenDropMenu(false)}>
                  {title}
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setOpenDropMenu(false)}>
                  {about}
                </Link>
              </li>
            </ul>
            <ul className={styles.ListSocialDrop}>
              <li>
                <Link href="https://github.com/JosephOmar" target="_blank">
                  <GitHubSvg fill="000" />
                </Link>
              </li>
              <li>
                <Link href="https://x.com/JosephMTDev" target="_blank">
                  <XSvg fill="000" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/joseph-omar-meza-torres-911515330/"
                  target="_blank"
                >
                  <LinkedInSvg />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className={styles.OpenDropMenu} style={{ height: 0 }}></div>
      )}
    </nav>
  );
};

export default Navbar;
