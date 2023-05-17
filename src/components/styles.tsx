import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Container = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: auto;

  @media (min-width: 600px) {
    width: 80%;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 980px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 4.5em;
  font-weight: 300;
  line-height: 1em;
  text-shadow: 0em 0.1em 0.1em rgba(0, 0, 0, 0.4);
`;

export const SectionTitle = styled.h2`
  font-weight: 300;
  font-size: 2em;
  color: #ffffff;
  margin: 0 0 24px;

  @media (min-width: 768px) {
    font-size: 2.5em;
  }
`;

export const SectionTitle2 = styled.h3`
  font-weight: 300;
  font-size: 2em;
  margin: 0 0 16px;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
`;

export const Column = styled.div`
  flex: 1;
`;

export const NarrowRow = styled.div`
  padding: 24px;

  @media (min-width: 980px) {
    padding: 48px;
  }
`;

export const HeroContent = styled.div`
  grid-area: 1/1;
  position: relative;
  place-items: center;
  display: grid;
  color: #ffffff;
`;

const buttonStyles = css`
  color: #28678b;
  border: 2px solid #28678b;
  background: buttonface;
  border-radius: 24px;
  font-size: 20px;
  padding: 0.5em 1em;
  line-height: 1.7;
  text-decoration: none;
  min-width: 170px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  margin: 0 auto;

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledATag = styled.a`
  ${buttonStyles}
`;

export const StyledLink = styled(Link)`
  ${buttonStyles}
`;

export const StyledButton = styled.button`
  ${buttonStyles}
`;

export const ListItem = styled.li`
  line-height: 1.5em;
  font-size: 1em;

  @media (min-width: 768px) {
    font-size: 1.5em;
  }

  @media (min-width: 980px) {
    line-height: 1.7em;
    font-size: 1.25em;
  }
`;
