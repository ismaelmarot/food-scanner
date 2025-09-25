import type { NutrimentsProps } from './Nutriments.interface';

export interface ProductProps {
    product_name: string;
    brands: string;
    nutriments?: NutrimentsProps;
    nutriscore_grade?: string;
    allergens?: string;
    labels_tags?: string[];
}