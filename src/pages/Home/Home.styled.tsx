import styled from 'styled-components';
import { flex } from '../../helpers/setFlex';
import { size } from '../../helpers/setSize';

export const HomeWrapper = styled.div`
    ${flex('column', 'flex-start', 'center')};
    ${size('100vw', '100vh')};
    padding: .3rem;
`;
