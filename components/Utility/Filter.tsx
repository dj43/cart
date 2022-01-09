import { ChangeEvent } from "react";
import { PrimarySelect } from "../UI/PrimarySelect";

interface Props {
  count: number;
}

export const Filter = (props: Props) => {
    
    const filterOptions = ['Latest','Lowest','Highest']
    const SizeOptions = ['All','XS','M','S','L','XL','XXL']


  const filter = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };
  return (
    <div className="flex justify-around items-center p-2 m-2 ">
      <div className="flex-1">{props.count} Products</div>
      <div className="flex-1">
        order
        <PrimarySelect
          onChange={filter}
          options={filterOptions}
        />
      </div>
      <div className="flex-1 flex flex-col">
          Filter
      <PrimarySelect
          onChange={filter}
          options={SizeOptions}
        />
      </div>
    </div>
  );
};
