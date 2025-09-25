import React from "react";
import { Card } from "react-bootstrap";
import type { ProductProps } from "../../interfaces/Product.interface";

type ProductCardInfoProps = {
  product: ProductProps;
};

const ProductCardInfo: React.FC<ProductCardInfoProps> = ({ product }) => {
  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <Card.Body>
        <Card.Title>{product.product_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {product.brands}
        </Card.Subtitle>
        {product.allergens && (
          <p>
            <strong>Allergens:</strong> {product.allergens}
          </p>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCardInfo;
