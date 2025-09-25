import React from "react";
import { Card, Row, Col, ProgressBar, Badge, Button } from "react-bootstrap";
import type { ProductProps } from "../../interfaces/Product.interface";

type ProductDetailsProps = {
  product: ProductProps;
  goBack: () => void;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, goBack }) => {
  const getNutriColor = (grade?: string) => {
    switch (grade) {
      case "a":
        return "#4caf50";
      case "b":
        return "#8bc34a";
      case "c":
        return "#ffeb3b";
      case "d":
        return "#ff9800";
      case "e":
        return "#f44336";
      default:
        return "#9e9e9e";
    }
  };

  const calcGDA = (value?: number, daily?: number) => {
    if (!value || !daily) return 0;
    return Math.round((value / daily) * 100);
  };

  return (
    <div style={{ width: "100%", border:'2px solid red' }}>
      <Button variant="secondary" onClick={goBack} className="mb-3">
        ← Back
      </Button>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          overflowX: "auto",
          padding: "0.5rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          height: "60vh",
        }}
      >
        {/* Card 2-1 */}
        <Card style={{ minWidth: "300px" }}>
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

        {/* Card 2-2 */}
        <Card style={{ minWidth: "200px" }}>
          <Card.Body>
            <Card.Title>NutriScore</Card.Title>
            <Badge
              style={{
                backgroundColor: getNutriColor(product.nutriscore_grade),
                color: "white",
                fontWeight: "bold",
                padding: "0.5rem",
                fontSize: "1.2rem",
              }}
            >
              {product.nutriscore_grade?.toUpperCase() || "-"}
            </Badge>
          </Card.Body>
        </Card>

        {/* Card 2-3 */}
        {product.nutriments && (
          <Card style={{ minWidth: "400px" }}>
            <Card.Body>
              <Card.Title>GDA</Card.Title>
              <Row>
                <Col md={6}>
                  <p>Energy: {product.nutriments.energy_kcal || 0} kcal</p>
                  <ProgressBar
                    now={calcGDA(product.nutriments.energy_kcal, 2000)}
                    label={`${calcGDA(
                      product.nutriments.energy_kcal,
                      2000
                    )}%`}
                  />
                </Col>
                <Col md={6}>
                  <p>Fat: {product.nutriments.fat || 0} g</p>
                  <ProgressBar
                    now={calcGDA(product.nutriments.fat, 70)}
                    label={`${calcGDA(product.nutriments.fat, 70)}%`}
                  />
                </Col>
                <Col md={6}>
                  <p>Saturated Fat:{" "}
                    {product.nutriments.saturated_fat || 0} g
                  </p>
                  <ProgressBar
                    now={calcGDA(product.nutriments.saturated_fat, 20)}
                    label={`${calcGDA(
                      product.nutriments.saturated_fat,
                      20
                    )}%`}
                  />
                </Col>
                <Col md={6}>
                  <p>Sugars: {product.nutriments.sugars || 0} g</p>
                  <ProgressBar
                    now={calcGDA(product.nutriments.sugars, 90)}
                    label={`${calcGDA(product.nutriments.sugars, 90)}%`}
                  />
                </Col>
                <Col md={6}>
                  <p>Sodium: {product.nutriments.sodium || 0} mg</p>
                  <ProgressBar
                    now={calcGDA(product.nutriments.sodium, 2400)}
                    label={`${calcGDA(product.nutriments.sodium, 2400)}%`}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
