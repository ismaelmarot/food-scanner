import type { ProductProps } from './Product.interface';

export interface SearchCardProps {
    setProduct: React.Dispatch<React.SetStateAction<ProductProps | null>>;
    setError: React.Dispatch<React.SetStateAction<string>>;
    error: string;
}