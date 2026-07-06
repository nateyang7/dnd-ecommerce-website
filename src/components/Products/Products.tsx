import styles from "./Products.module.css";
import { products } from "../../data/products";
import type { Product } from "../../types/product";

/** Composant react représentant la section proposant la liste des produits. */
export default function Products() {
  const controlButtons = [
    { id: 1, textContent: "Tout afficher" },
    { id: 2, textContent: "Livres" },
    { id: 3, textContent: "Dés" },
    { id: 4, textContent: "Figurines" },
  ];
  function handleClick() {}
  return (
    <>
      <section id="products" className={styles.products}>
        <h2>Nos Produits</h2>

        <div className={styles.btnContainer}>
          {controlButtons.map((controlButton) => (
            <button
              className={styles.btn}
              onClick={handleClick}
              key={controlButton.id}
            >
              {controlButton.textContent}
            </button>
          ))}
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
