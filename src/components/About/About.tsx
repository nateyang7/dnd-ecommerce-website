// src/components/About/About.tsx

import styles from "./About.module.css";

/** Type représentant les propriétés du composant About. */
type AboutProps = {
  members: { id: number; name: string; description: string }[];
};

/** Composant react représentant une section à propos de l'entreprise. */
export default function About({ members }: AboutProps) {
  return (
    <section id="about" className={styles.about}>
      <h2>À Propos</h2>
      <blockquote>Les jeux de rôles sur table</blockquote>
      <p>
        Notre équipe formé de passionnés pour les jeux de rôles sur tables.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="membersContainer">
        {members.map(
          (member: { id: number; name: string; description: string }) => (
            <div className="memberDiv" key={member.id}>
              <p>{member.name}</p>
              <img alt={`Photo de ${member.name}`}></img>
              <p>{member.description}</p>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
