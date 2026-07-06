// src/composants/NavBar/NavBar.tsx

import styles from "./NavBar.module.css";

type NavBarProps = {
  navigationLinks: { href: string; textContent: string }[];
};

/** Composant react représentant la barre de navigation. */
export default function NavBar({ navigationLinks }: NavBarProps) {
  return (
    <nav className={styles.navbar}>
      {navigationLinks.map((navigationLink) => (
        <a href={navigationLink.href} key={navigationLink.textContent}>
          {navigationLink.textContent}
        </a>
      ))}
    </nav>
  );
}
