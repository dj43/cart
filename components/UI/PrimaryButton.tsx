import { ButtonHTMLAttributes } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLInputElement> & {
  name: string;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  name,
  ...props
}) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
      {...props}
      id={name}
    >{name}</button>
  );
};
