import React from "react";
import { Card, Row, Col, ProgressBar } from "react-bootstrap";

type Nutriments = {
  energy_kcal?: number;
  fat?: number;
  saturated_fat?: number;
  sugars?: number;
  sodium?: number;
};

type GDACardProps = {
  nutriments: Nutriments;
};

const GDACard: React.FC<GDACardProps> = ({ nutriments }) => {
  const calcGDA = (value?: number, daily?: number) => {
    if (!value || !daily) return 0;
    return Math.round((value / daily) * 100);
  };

  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <Card.Body>
        <Card.Title>GDA</Card.Title>
        <Row>
          <Col md={6}>
            <p>Energy: {nutriments.energy_kcal || 0} kcal</p>
            <ProgressBar
              now={calcGDA(nutriments.energy_kcal, 2000)}
              label={`${calcGDA(nutriments.energy_kcal, 2000)}%`}
            />
          </Col>
          <Col md={6}>
            <p>Fat: {nutriments.fat || 0} g</p>
            <ProgressBar
              now={calcGDA(nutriments.fat, 70)}
              label={`${calcGDA(nutriments.fat, 70)}%`}
            />
          </Col>
          <Col md={6}>
            <p>Saturated Fat: {nutriments.saturated_fat || 0} g</p>
            <ProgressBar
              now={calcGDA(nutriments.saturated_fat, 20)}
              label={`${calcGDA(nutriments.saturated_fat, 20)}%`}
            />
          </Col>
          <Col md={6}>
            <p>Sugars: {nutriments.sugars || 0} g</p>
            <ProgressBar
              now={calcGDA(nutriments.sugars, 90)}
              label={`${calcGDA(nutriments.sugars, 90)}%`}
            />
          </Col>
          <Col md={6}>
            <p>Sodium: {nutriments.sodium || 0} mg</p>
            <ProgressBar
              now={calcGDA(nutriments.sodium, 2400)}
              label={`${calcGDA(nutriments.sodium, 2400)}%`}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default GDACard;
