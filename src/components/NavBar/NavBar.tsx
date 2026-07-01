// src/composants/NavBar/NavBar.tsx

import styles from "./NavBar.module.css";

/** Composant react représentant la barre de navigation. */
export default function NavBar() {
  const navigationLinks: { href: string; textContent: string }[] = [
    { href: "#home", textContent: "Accueil" },
    { href: "#about", textContent: "À Propos" },
    { href: "#products", textContent: "Produits" },
    { href: "#contact", textContent: "Contact" },
  ];
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
