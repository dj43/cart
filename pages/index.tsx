import Link from "next/link";
import { useEffect, useState } from "react";
import { Cart } from "../components/Cart";
import { Products } from "../components/Products";
import { Filter } from "../components/Utility/Filter";
import data from "../data.json";
import { Product, Product as ProductType } from "../types";
import styles from "./index.module.css";

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>(data.products);
  const [cartItems, setcartItems] = useState([] as ProductType[]);

  useEffect(() => {
    localStorage.getItem("cartItem") &&
      setcartItems(JSON.parse(localStorage.getItem("cartItem")));
  }, []);

  const sortProducts = (event) => {
    switch (event.target?.value) {
      case "Latest":
        setProducts((prevProducts) =>
          [...prevProducts].sort((a, b) => (a._id > b._id ? 1 : -1))
        );
        break;
      case "Lowest":
        setProducts((prevProducts) =>
          [...prevProducts].sort((a, b) => a.price - b.price)
        );
        break;
      case "Highest":
        setProducts((prevProducts) =>
          [...prevProducts].sort((a, b) => b.price - a.price)
        );
        break;
    }
  };

  const filterProducts = (event) => {
    let filteredSize = event.target.value;
    if (filteredSize === "All") setProducts(data.products);
    else
      setProducts(
        data.products.filter(
          (product) => product.availableSizes.indexOf(filteredSize) !== -1
        )
      );
  };

  const addItemToCart = (product: Product) => {
    setcartItems((prevCartItems) => {
      const updatedcart = prevCartItems.map((item) => ({ ...item }));
      console.log(updatedcart);

      let productIndex = updatedcart.findIndex((cartItem) => {
        return cartItem._id === product._id;
      });
      if (productIndex === -1) {
        product.count = 1;
        updatedcart.push(product);
        updatedcart[updatedcart.length - 1].count = 1;
      } else {
        updatedcart[productIndex].count = updatedcart[productIndex].count + 1;
      }
      localStorage.setItem("cartItem", JSON.stringify(updatedcart));
      return updatedcart;
    });
  };

  const removeItemFromCart = (index: number) => {
    setcartItems((prevCartItems) => {
      const updatedcart = prevCartItems.filter((_, i) => i !== index);
      localStorage.setItem("cartItem", JSON.stringify(updatedcart));
      return updatedcart;
    });
  };

  return (
    <div className={styles.gridContainer}>
      <header className={`${styles.header} flex items-center p-2`}>
        <Link href="/">
          <a className="text-white hover:text-blue-800 ">React Shopping cart</a>
        </Link>
      </header>
      <main className={styles.main}>
        <div className="flex flex-wrap">
          <div className="flex-[3_1_60rem]">
            <div className="">
              <Filter
                count={products.length}
                filterProducts={filterProducts}
                sortProducts={sortProducts}
              />
              <Products addItemToCart={addItemToCart} products={products} />
            </div>
          </div>
          <div className="flex-[1_1_20rem]">
            <Cart removeItem={removeItemFromCart} cartItems={cartItems} />
          </div>
        </div>
      </main>
      <footer
        className={`flex justify-center items-center text-white ${styles.footer}`}
      >
        All rights reserved
      </footer>
    </div>
  );
}
