import styles from "./Hero.module.css";

/** Composant react représentant la première page à présenter aux utilisateurs. */
export default function Hero() {
  return (
    <div id="home" className={styles.heroImg}>
      <div className={styles.heroText}>
        <h1>Bienvenue</h1>
        <p>Préparer vos aventures !</p>
      </div>
    </div>
  );
}
