import { useState } from "react";
import MobileIcon from "./MobileIcon";
import styles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = ({ toggle, openNav }) => {
  let attachedClasses = [styles.Nav];
  if (toggle) {
    attachedClasses = [styles.Nav, styles.open];
  }
  return (
    <div>
      <nav className={styles.nav__wr}>
        <div className={styles.logo}>
          <h3>TC</h3>
        </div>
        <div className={styles.nav__desktop}></div>
        <MobileIcon openNav={openNav} toggle={toggle} />
      </nav>
      <div className={attachedClasses.join(" ")}>
        <div className={styles.side__nav_logo}>
          <h2> TC </h2>
        </div>
        <ul className={styles.nav__list}>
          <li data-aos={"fade-up"} onClick={openNav}>
            <Link href="/">Home</Link>
          </li>

          <li data-aos={"fade-up"} onClick={openNav}>
            <Link href="/about">About</Link>
          </li>

          <li data-aos={"fade-up"}>
            <Link href="/projects">Projects</Link>
          </li>

          <li data-aos={"fade-up"}>
            <Link href="/skills">Skills</Link>
          </li>

          <li data-aos={"fade-up"}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
