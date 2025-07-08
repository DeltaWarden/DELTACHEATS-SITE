import React, { useEffect, useState } from "react";
import styles from "./Catalog.module.css";

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: number;
}

const Catalog: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories/")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    setLoading(true);
    const url = selectedCategory
      ? `http://127.0.0.1:8000/api/products/?category=${selectedCategory}`
      : "http://127.0.0.1:8000/api/products/";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [selectedCategory]);

  return (
    <div className={styles.catalog}>
      <aside className={styles.filters}>
        <h3>Категории</h3>
        <ul>
          <li
            className={!selectedCategory ? styles.active : ""}
            onClick={() => setSelectedCategory(null)}
          >
            Все
          </li>
          {categories.map((cat) => (
            <li
              key={cat.id}
              className={selectedCategory === cat.id ? styles.active : ""}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </aside>

      <section className={styles.products}>
        <h2>{selectedCategory ? `Категория: ${categories.find(c => c.id === selectedCategory)?.name}` : "Все товары"}</h2>
        {loading ? (
          <p>Загрузка...</p>
        ) : products.length === 0 ? (
          <p>Нет товаров в этой категории.</p>
        ) : (
          <div className={styles.productList}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <button>Купить за {product.price} ₽</button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Catalog;
