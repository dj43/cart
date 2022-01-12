import { ChangeEvent } from "react";
import { PrimarySelect } from "../UI/PrimarySelect";

interface Props {
  count: number;

  filterProducts: any;
  sortProducts: any;
}

export const Filter = (props: Props) => {
  const sortOptions = ["Latest", "Lowest", "Highest"];
  const SizeOptions = ["All", "XS", "M", "S", "L", "XL", "XXL"];


  return (
    <div className="flex justify-around items-center p-2 m-2 border-b border-black">
      <div className="flex-1">{props.count} Products</div>
      <div className="flex-1 flex">
        order
        <PrimarySelect
          // value={props.sort}
          className="ml-2"
          onChange={props.sortProducts}
          options={sortOptions}
        />
      </div>
      <div className="flex-1 flex">
        Filter
        <PrimarySelect
          // value={props.size}
          className="ml-2"
          onChange={props.filterProducts}
          options={SizeOptions}
        />
      </div>
    </div>
  );
};
