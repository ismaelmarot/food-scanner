import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const SearchCardWrapper = styled(Card)`
    width: 100%;
    /* max-width: 500px; */
    padding: 1rem;
    border: 1rem solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;