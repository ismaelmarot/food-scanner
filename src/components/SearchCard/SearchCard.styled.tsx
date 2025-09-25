import styled from 'styled-components';
import { Card, Form, Button } from 'react-bootstrap';
import { flex } from '../../helpers/setFlex';
import { size } from '../../helpers/setSize';
import { COLORS } from '../../styles/colors';

export const SearchCardWrapper = styled(Card)`
    ${flex('column', 'space-between', 'center')};
    ${size('100%', '100%')};
    padding-bottom: 10rem;
    border-radius: 1rem;
    background-color: ${COLORS.darkGrey};
`;

export const H1 = styled.h1`
    margin: 2rem 0 3rem;
    font-size: 2.5rem;
    color: ${COLORS.grey};
`;

export const FormStyled = styled(Form)`
    ${flex('column', 'center', 'center')};
    ${size('80%', '60%')};
`;

export const FormControlStyled = styled(Form.Control)`
    ${size('80%', 'auto')};
    font-size: 2rem;
`;

export const ButtonStyled = styled(Button)`
    ${size('80%', 'auto')};
    margin-top: 3rem;
    font-size: 3rem;
    border: none;
    background-color: ${COLORS.grey};
`;