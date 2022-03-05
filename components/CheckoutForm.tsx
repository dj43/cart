import { PrimaryButton } from "./UI/PrimaryButton";
import { PrimaryInput } from "./UI/PrimaryInput";

interface CheckoutFormProps {}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({}) => {
  return (
    <div>
      <form action="">
        <div className="flex flex-col m-2 p-2 mr-4">
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <PrimaryInput type="email" name="email" id="email" />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <PrimaryInput type="text" name="name" id="name" />
          </div>
          <div className="mb-2">
            <label htmlFor="address">Address</label>
            <PrimaryInput type="text" name="address" id="address" />
          </div>
          <PrimaryButton className="w-48 mt-2" name="Checkout" />
        </div>
      </form>
    </div>
  );
};
