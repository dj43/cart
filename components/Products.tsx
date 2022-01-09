import Image from "next/image";
import Link from "next/link";
import data from "../data.json";
import { Product as ProductType, Size } from "../types";
import formatCurrency from "../utils/formatCurrency";
import { PrimaryButton } from "./UI/PrimaryButton";

interface ProductProps {
  products: ProductType[];
}

export const Products: React.FC<ProductProps> = (props) => {
  console.log(props.products);

  return (
    <div>
      <ul className="flex flex-wrap justify-center items-center">
        {props.products.map((product) => (
          <li key={product._id} className="flex-[1_1_29rem] p-2 m-2">
            <div className="flex flex-col justify-between h-max pb-5">
              <Image
                width={440}
                height={600}
                src={product.image}
                alt={product.title}
              />
              <Link href={"#" + product._id} passHref>
                <p className="hover:text-blue-800  cursor-pointer">
                  {product.title}
                </p>
              </Link>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="text-3xl ml-6"> { formatCurrency(product.price)}</div>
                <PrimaryButton name="Add To Cart" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
