import React from 'react';
import type { ProductDetailsProps } from '../../interfaces/ProductDetails.interface';
import { ProductDetailsWrapper, CardWrapper } from './ProductDetails.styled';
import ProductCardInfo from '../ProductCardInfo/ProductCardInfo';
import NutriScoreCard from '../NutriScoreCard/NutriScoreCard';
import GDACard from '../GDACard/GDACard';

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <ProductDetailsWrapper>
      <CardWrapper>
        <ProductCardInfo product={product} />
      </CardWrapper>

      <CardWrapper>
        <NutriScoreCard grade={product.nutriscore_grade} />
      </CardWrapper>

      {product.nutriments && (
        <CardWrapper>
          <GDACard nutriments={product.nutriments} />
        </CardWrapper>
      )}
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;
