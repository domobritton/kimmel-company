import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface SectionProps {
  large?: boolean;
  styles?: string;
  children: ReactNode;
}

const StyledSection = styled.section<Partial<SectionProps>>`
  ${({ large }) =>
    large
      ? `
  padding: 50px 0;

  @media (min-width: 768px) {
    padding: 100px 0;
  }
  `
      : `padding: 0;`}
`;

export const Section = ({
  large = true,
  styles = '',
  children,
}: SectionProps): JSX.Element => {
  return (
    <StyledSection
      large={large}
      css={css`
        ${styles}
      `}
    >
      {children}
    </StyledSection>
  );
};

export default Section;
