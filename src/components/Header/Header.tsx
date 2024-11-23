import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.mainHeader}>
        <div className={styles.logoWrapper}>LOGO</div>
        <nav className={styles.nav}>
          <Link className={styles.navLink} href="/characters">
            Characters
          </Link>
          <Link className={styles.navLink} href="/profile">
            Profile
          </Link>
          <Link className={styles.navLink} href="/signup">
            Signup
          </Link>
        </nav>
        <div className={styles.filler} />
      </div>
    </header>
  );
}
