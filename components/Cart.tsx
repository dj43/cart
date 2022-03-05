import Image from "next/image";
import { Product } from "../types";
import formatCurrency from "../utils/formatCurrency";
import { CheckoutForm } from "./CheckoutForm";
import { PrimaryButton } from "./UI/PrimaryButton";

interface CartProps {
  cartItems: Product[];
  removeItem: Function;
}

export const Cart: React.FC<CartProps> = ({ cartItems, ...props }) => {
  return (
    <div>
      <div className="border-b border-black p-2 m-2">
        {cartItems.length === 0 ? (
          <div> Cart is Empty </div>
        ) : (
          <div>You have {cartItems.length} items in the cart</div>
        )}
      </div>
      <div>
        <ul className="flex flex-col">
          {cartItems.map((cartItem, index) => (
            <li className="flex m-2 p-2" key={cartItem._id}>
              <div>
                <Image
                  width={40}
                  height={60}
                  src={cartItem.image}
                  alt={cartItem.title}
                />
              </div>
              <div className="flex flex-col w-full ml-2">
                <div>{cartItem.title}</div>
                <div className="flex justify-center">
                  {cartItem.count} X {formatCurrency(cartItem.price)}
                  <div className="ml-4">
                    <PrimaryButton
                      onClick={() => {
                        props.removeItem(index);
                      }}
                      name="Remove"
                      color="bg-teal-400	hover:bg-teal-700"
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {cartItems.length > 0 && <div className="flex border-t border-black pt-4">
          <span className="mr-2">Total:</span>
          {formatCurrency(
            cartItems.reduce(
              (a, b) => ({
                price: a.price + b.price * b.count,
              }),
              { price: 0 }
            ).price
          )}
          <div className="ml-4">
            <PrimaryButton name="Proceed" />
          </div>
        </div>}
        <CheckoutForm/>
      </div>
    </div>
  );
};
