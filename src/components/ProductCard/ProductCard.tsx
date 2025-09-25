import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NutriScoreBadge from '../NutriScore/NutriScore';
import GDAProgress from '../GDAProgress/GDAProgress';
import LabelBadges from '../LabelBadges/LabelBadges';
import type { ProductCardProps } from '../../interfaces/ProductCard.interface';
import { ResultCard } from './ProductCard.styled';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <ResultCard>
      <h3>{product.product_name}</h3>
      <p><strong>Brand:</strong> {product.brands}</p>

      {/* NutriScore */}
      <p>
        <strong>NutriScore:</strong>{' '}
        <NutriScoreBadge grade={product.nutriscore_grade} />
      </p>

      {/* GDA */}
      {product.nutriments && (
        <>
          <h5>GDA</h5>
          <Row>
            <Col md={6}>
              <GDAProgress label="Energy" value={product.nutriments.energy_kcal} daily={2000} unit="kcal" />
            </Col>
            <Col md={6}>
              <GDAProgress label="Fat" value={product.nutriments.fat} daily={70} unit="g" />
            </Col>
            <Col md={6}>
              <GDAProgress label="Saturated" value={product.nutriments.saturated_fat} daily={20} unit="g" />
            </Col>
            <Col md={6}>
              <GDAProgress label="Sugars" value={product.nutriments.sugars} daily={90} unit="g" />
            </Col>
            <Col md={6}>
              <GDAProgress label="Sodium" value={product.nutriments.sodium} daily={2400} unit="mg" />
            </Col>
          </Row>
        </>
      )}

      {/* Labels */}
      <LabelBadges labels={product.labels_tags} />

      {product.allergens && (
        <p className="mt-2"><strong>Allergens:</strong> {product.allergens}</p>
      )}
    </ResultCard>
  );
};

export default ProductCard;
