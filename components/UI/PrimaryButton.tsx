import { ButtonHTMLAttributes } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLInputElement> & {
  name: string;
  color?: string
  className?: string
  
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  className = '',
  color = "bg-blue-500 hover:bg-blue-700",
  name,
  ...props
}) => {
  return (
    <button
      className={`text-white font-bold py-1 px-4 rounded ${color} ${className}`}
      {...props}
      id={name}
    >{name}</button>
  );
};
