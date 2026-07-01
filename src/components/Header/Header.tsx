// src/components/Header/Header.tsx

import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.css";

/** Composant react représentant l'entête du site. */
export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <a>
        <img alt="Logo de l'entreprise"></img>
      </a>
      <NavBar />
    </header>
  );
}
