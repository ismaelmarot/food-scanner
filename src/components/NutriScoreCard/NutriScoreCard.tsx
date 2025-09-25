import React from 'react';
import type { NutriScoreCardProps } from '../../interfaces/NutriScoreCard.interface';
import { Card } from "react-bootstrap";
import { NutriScoreCardWrapper, NutriBadge } from './NutriScoreCard.styled';
import { NUTRISCORE_COLORS } from '../../styles/colors';

const NutriScoreCard: React.FC<NutriScoreCardProps> = ({ grade }) => {
  const getNutriColor = (grade?: string) => {
    return grade ? NUTRISCORE_COLORS[grade.toLowerCase()] || NUTRISCORE_COLORS.default : NUTRISCORE_COLORS.default;
  };

  return (
    <NutriScoreCardWrapper>
      <Card.Body>
        <Card.Title>NutriScore</Card.Title>
        <NutriBadge color={getNutriColor(grade)}>
          {grade?.toUpperCase() || '-'}
        </NutriBadge>
      </Card.Body>
    </NutriScoreCardWrapper>
  );
};

export default NutriScoreCard;
