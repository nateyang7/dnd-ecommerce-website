import styles from "./Contact.module.css";

/** Composant react représentant la section pour contacter l'entreprise. */
export default function Contact() {
  function handleSubmit(): void {
    return;
  }

  return (
    <section id="contact" className={styles.contact}>
      <h2>Nous contacter</h2>
      <form action={handleSubmit}>
        <div className={styles.formInput}>
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            size={20}
            placeholder="Votre prénom..."
          ></input>
        </div>

        <div className={styles.formInput}>
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            size={20}
            placeholder="Votre nom..."
          ></input>
        </div>

        <div className={styles.formInput}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            size={30}
            placeholder="gandalf@gmail.com"
          ></input>
        </div>

        <div className={styles.formInput}>
          <label htmlFor="subject">Sujet</label>
          <textarea
            name="subject"
            id="subject"
            placeholder="Écrire un message..."
          ></textarea>
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}
