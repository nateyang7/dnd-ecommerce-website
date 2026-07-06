import styles from "./Products.module.css";
import { products } from "../../data/products";
import type { Product } from "../../types/product";

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

        <div className={styles.productsContainer}>
          {products.map((product: Product) => (
            <div className={styles.product} key={product.id}>
              <p>{product.name}</p>
              <img src={product.img} alt={"Image pour " + product.name}></img>
              <p>{product.price} €</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
