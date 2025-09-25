import styled from 'styled-components';
import { flex } from '../../helpers/setFlex';
import { size } from '../../helpers/setSize';

export const ProductDetailsWrapper = styled.div`
    ${flex('row', 'flex-start', 'center')};
    ${size('100%', '100vh')};
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
`;

export const CardWrapper = styled.div`
    ${flex('row', 'flex-start', 'center')};
    flex: 0 0 100%;
    box-sizing: border-box;
    ${size('100%', '100%')};
    padding: 1rem;
    scroll-snap-align: start;
`;
