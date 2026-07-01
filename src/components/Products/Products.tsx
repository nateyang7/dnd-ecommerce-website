// src/components/Products/Products.tsx

import styles from "./Products.module.css";

/** Composant react représentant la section proposant la liste des produits. */
export default function Products() {
  return (
    <>
      <section id="products" className={styles.products}>
        <h2>Nos Produits</h2>
      </section>
    </>
  );
}
