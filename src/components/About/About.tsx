import styles from "./About.module.css";
import teamImg from "../../assets/team.jpg";

/** Composant react représentant une section à propos de l'entreprise. */
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>À Propos</h2>
      <div className={styles.teamInfo}>
        <p>
          Notre équipe formé de passionnés pour les jeux de rôles sur tables.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <img
          className={styles.teamPhoto}
          src={teamImg}
          alt="Photo de l'équipe"
        />
      </div>
    </section>
  );
}
