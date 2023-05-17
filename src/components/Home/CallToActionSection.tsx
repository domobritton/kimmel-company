import { css } from '@emotion/react';
import Hero from '../Hero';
import Section from '../Section';
import { Container, Flex, HeroContent, StyledLink } from '../styles';
import styled from '@emotion/styled';
import { IGatsbyImageData } from 'gatsby-plugin-image';

const CTATitle = styled.h6`
  margin: 0 0 24px;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 3px;
  text-align: center;
  text-shadow: 0.08em 0.08em 0.08em rgba(0, 0, 0, 0.4);

  @media (min-width: 768px) {
    font-size: 32px;
    letter-spacing: 6px;
  }
`;

interface CallToActionSectionProps {
  ctaImage?: IGatsbyImageData;
  copy?: boolean;
}

export const CallToActionSection = ({
  ctaImage,
  copy = true,
}: CallToActionSectionProps): JSX.Element => {
  return (
    <Section large={false}>
      {ctaImage && (
        <Hero image={ctaImage} alt='next step'>
          <HeroContent
            css={css`
              background: #3a3a3a;
              opacity: 0.4;
            `}
          ></HeroContent>
          <HeroContent>
            <Container>
              <CTATitle>Are you ready to take the next step?</CTATitle>
              {copy && (
                <p
                  css={css`
                    color: #ffffff;
                  `}
                >
                  When considering cost, competitiveness, performance and job
                  satisfaction, the business and personal value of human
                  interaction is undeniable. We deliver a comprehensive,
                  coherent method of becoming effective in today's world. We
                  serve as a conduit for expanded self-trust and discovery,
                  opening new horizons where none existed before.
                </p>
              )}
              <Flex
                css={css`
                  justify-content: center;
                  flex-direction: row;
                `}
              >
                <StyledLink to='/contact'>Start The Conversation</StyledLink>
              </Flex>
            </Container>
          </HeroContent>
        </Hero>
      )}
    </Section>
  );
};

export default CallToActionSection;
