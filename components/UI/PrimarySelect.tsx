import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

type PrimarySelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  className?: string;
  options: any[];
};

export const PrimarySelect: React.FC<PrimarySelectProps> = ({
  className = "",
  options,
  ...props
}) => {
  return (
    <div className={"mb-3 w-52 " + className}>
      <select
        {...props}
        className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};
