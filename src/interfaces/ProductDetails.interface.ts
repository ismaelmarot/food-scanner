import { type ProductProps } from './Product.interface';

export interface ProductDetailsProps {
    product: ProductProps;
    goBack: () => void;
};