import styled from 'styled-components';
import { Badge } from 'react-bootstrap';

export const NutriBadge = styled(Badge)<{ color: string }>`
    background-color: ${props => props.color};
    color: rgb(255, 255, 255);
    font-weight: bold;
    margin-right: .5rem;
`;