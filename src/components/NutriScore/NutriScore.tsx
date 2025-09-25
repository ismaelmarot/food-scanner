import React from 'react';
import type { NutriScoreProps } from '../../interfaces/NutriScore.interface';
import { NutriBadge } from './NutriScore.styled';

const NutriScoreBadge: React.FC<NutriScoreProps> = ({ grade }) => {
    const getColor = (g?: string) => {
        switch (g) {
        case 'a': return 'rgba(76, 175, 80, 1)';
        case 'b': return 'rgba(139, 195, 74, 1)';
        case 'c': return 'rgba(255, 235, 59, 1)';
        case 'd': return 'rgba(255, 152, 0, 1)';
        case 'e': return 'rgba(244, 67, 54, 1)';
        default: return 'rgba(158, 158, 158, 1)';
        }
    };

    return (
        <NutriBadge color={getColor(grade)}>
            {grade?.toUpperCase() || '-'}
        </NutriBadge>
    );
};

export default NutriScoreBadge;
