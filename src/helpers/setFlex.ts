import type { AlignItems, FlexDirection, JustifyContent } from '../types/flexValue.type';

export const flex = (
    direction: FlexDirection = 'row',
    justify: JustifyContent = 'flex-start',
    align: AlignItems = 'stretch'
) => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
`;
