// src/components/Footer/Footer.tsx

import styles from "./Footer.module.css";

/** Composant react représentant le pied de la page. */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; Nom de l'entreprise. Tous droits réservés.</p>
    </footer>
  );
}
