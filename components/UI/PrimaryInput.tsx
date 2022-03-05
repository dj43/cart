import { InputHTMLAttributes } from "react";

type PrimaryInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

export const PrimaryInput: React.FC<PrimaryInputProps> = ({
  color = "bg-blue-500 hover:bg-blue-700",
  name,
  ...props
}) => {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      {...props}
      id={name}
    ></input>
  );
};
