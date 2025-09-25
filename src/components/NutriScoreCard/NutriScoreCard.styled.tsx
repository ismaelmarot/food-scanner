import styled from 'styled-components';
import { Badge, Card } from 'react-bootstrap';
import { flex } from '../../helpers/setFlex';
import { size } from '../../helpers/setSize';
import { COLORS } from '../../styles/colors';

export const NutriScoreCardWrapper = styled(Card)`
    ${flex('column', 'center', 'center')};
    ${size('100%', '100%')};
    padding: 1rem;
    border-radius: 1rem;
    background-color: ${COLORS.darkGrey};
`;

export const NutriBadge = styled(Badge)<{ color?: string }>`
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 1);
    background-color: ${ (props) => props.color || COLORS.red  } !important;
    font-weight: bold;
`;
