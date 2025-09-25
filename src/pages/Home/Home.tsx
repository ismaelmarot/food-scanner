import React, { useState } from 'react';
import type { ProductProps } from '../../interfaces/Product.interface';
import SearchCard from '../../components/SearchCard/SearchCard';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { HomeWrapper } from './Home.styled';

const Home: React.FC = () => {
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [error, setError] = useState("");

  return (
    <HomeWrapper>
      {!product && (
        <SearchCard setProduct={setProduct} setError={setError} error={error} />
      )}
      {product && (
        <ProductDetails product={product} goBack={() => setProduct(null)} />
      )}
    </HomeWrapper>
  
  );
};

export default Home;
