import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Container, Flex, HeroContent, NarrowRow, StyledLink } from '../styles';
import Section from '../Section';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Hero from '../Hero';
import { Fragment } from 'react';

const LangKeyText = styled.h2`
  font-weight: 700;
  font-size: 2em;
  color: #ffffff;
  text-align: center;
  margin: 48px 0;

  @media (min-width: 768px) {
    font-size: 3em;
  }

  @media (min-width: 980px) {
    font-size: 70px;
  }
`;

interface OurCommitmentSectionProps {
  langImage?: IGatsbyImageData;
}

export const OurCommitmentSection = ({
  langImage,
}: OurCommitmentSectionProps): JSX.Element => {
  return (
    <Fragment>
      {langImage && (
        <Hero
          image={langImage}
          css={css`
            position: fixed;
            height: 100vh;
            top: 0;
            left: 0;
            min-width: 100vw;
            z-index: -1;
          `}
          heroStyles='padding-bottom: 200px;'
          alt='language is the key'
          className='lang-image'
        >
          <HeroContent>
            <Container>
              <LangKeyText>Language Is The Key</LangKeyText>
            </Container>
          </HeroContent>
        </Hero>
      )}
      <Section
        styles='background: #ffffff; padding: 0; max-height: 520px; @media (min-width: 768px) {
          max-height: 395px;
        }@media (min-width: 980px) {
          max-height: 300px;
              }'
      >
        <Container
          css={css`
            position: relative;
            top: -200px;
            left: 0;
            right: 0;

            @media (min-width: 768px) {
              top: -200px;
            }

            @media (min-width: 980px) {
              top: -300px;
            }
          `}
        >
          <NarrowRow
            css={css`
              padding-top: 48px;
              background: #e1e1e1;
            `}
          >
            <p>
              <b>
                Our core commitment is to people's brilliance and limitless
                potential.
              </b>{' '}
              Using language as an integral discovery tool we achieve that
              result! To succeed in today's world, everyone needs to be
              successful in managing a variety of conversations, particularly to
              evoke creative thinking, elicit commitments to action, and resolve
              breakdowns.
            </p>
            <p>
              In working with us, whether as a business, organization,
              individual or family, you will gain a deeper appreciation of the
              power of communication, the underlying structure of conversations,
              and learn the art of managing commitments through intentional
              listening and speaking, culminating in personal satisfaction and
              success.
            </p>
            <Flex
              css={css`
                justify-content: center;
              `}
            >
              <StyledLink to='/services'>Learn More</StyledLink>
            </Flex>
          </NarrowRow>
        </Container>
      </Section>
    </Fragment>
  );
};

export default OurCommitmentSection;
