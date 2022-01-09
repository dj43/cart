import Link from "next/link";
import styles from "./index.module.css";
import { useState } from "react";
import { Product as ProductType } from "../types";
import data from "../data.json";
import { Products } from "../components/Products";
import { Filter } from "../components/Utility/Filter";

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

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
              <Filter count={products.length}/>
              <Products products={products} />
            </div>
          </div>
          <div className="flex-[1_1_20rem]">sidebar</div>
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
