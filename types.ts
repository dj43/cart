export type Size = "X" | "L" | "M" | "XL" | "XXL";
export type Product = {
    _id: string;
    image: string;
    title: string;
    description: string;
    availableSizes: string[];
    price: number;
}