// src/components/Products/Products.tsx

import styles from "./Products.module.css";

import book1 from "../../assets/book1.png";
import book2 from "../../assets/book2.png";
import book3 from "../../assets/book3.png";

/** Composant react représentant la section proposant la liste des produits. */
export default function Products() {
  function handleClick() {}
  return (
    <>
      <section id="products" className={styles.products}>
        <h2>Nos Produits</h2>
        <div className={styles.buttonsContainer}>
          <button className={styles.btn} onClick={handleClick}>
            Montrer tout
          </button>
          <button className={styles.btn}>Livres</button>
          <button className={styles.btn} onClick={handleClick}>
            Dés
          </button>
          <button className={styles.btn}>Cartes</button>
          <button className={styles.btn}>Figurines</button>
          <button className={styles.btn}>Accessoires</button>
        </div>

        <div className="row">
          <div className="column book">
            <div className="content">
              <img src={book1} alt="Livre 1" style={{ width: "150px" }}></img>
              <h3>Livre 1</h3>
              <p>Prix 1</p>
            </div>
          </div>
          <div className="column book">
            <div className="content">
              <img src={book2} alt="Livre 2" style={{ width: "150px" }}></img>
              <h3>Livre 2</h3>
              <p>Prix 2</p>
            </div>
          </div>
          <div className="column book">
            <div className="content">
              <img src={book3} alt="Livre 3" style={{ width: "150px" }}></img>
              <h3>Livre 3</h3>
              <p>Prix 3</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
