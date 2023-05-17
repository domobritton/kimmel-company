import { PageProps, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { IGatsbyImageData, StaticImage, getImage } from 'gatsby-plugin-image';
import Hero from '../components/Hero';
import { Container, Flex, HeroContent, HeroTitle } from '../components/styles';
import Section from '../components/Section';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CallToActionSection from '../components/Home/CallToActionSection';

const LangKeyTitle = styled.h2`
  font-weight: 300;
  font-size: 2em;
  color: #2b3e4c;
  margin: 0 0 24px;

  @media (min-width: 768px) {
    font-size: 2.5em;
  }
`;

const SectionTitle = styled.h3`
  font-weight: 300;
  font-size: 2em;
  color: #4e6a65;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2.5em;
  }
`;

const Subtitle = styled.h4`
  font-weight: 300;
  font-size: 1.5em;
  margin: 0 0 24px;
`;

interface ImageData {
  coreValuesHero: IGatsbyImageData;
  ctaImage: IGatsbyImageData;
}

interface Props extends PageProps {
  data: ImageData;
}

export const CoreValues = ({ data }: Props): JSX.Element => {
  const image = getImage(data.coreValuesHero);
  const ctaImage = getImage(data.ctaImage);
  return (
    <Layout>
      {image && (
        <Hero image={image} alt='A road less traveled'>
          <HeroContent>
            <Container>
              <HeroTitle>Our Core Values</HeroTitle>
            </Container>
          </HeroContent>
        </Hero>
      )}
      <Section
        styles={`
          background: #e1e1e1;
        `}
      >
        <Container>
          <LangKeyTitle>LIVING IN LANGUAGE</LangKeyTitle>
          <p>
            The extraordinary technology of “living in language” provides the
            foundation for our work. We focus on a way of “being” in life in
            which authentic communication generates effectiveness and
            satisfaction. Who you are “being” while you are doing what you are
            doing determines the quality of your work and the outcome. Language
            is generative. What we say or don't say makes a difference.
          </p>
          <p>
            Our commitment to improved communication in both listening and
            speaking domains, a shared vision, an appreciation of diversity,
            alignment toward action, and the ability to choose attitudes that
            contribute to the whole produce outstanding results.
          </p>
        </Container>
      </Section>
      <Section
        styles='          
        background: #f5f5f5;
        padding: 50px 0 25px;

        @media (min-width: 768px) {
          padding: 100px 0 25px;
        }

        @media (min-width: 980px) {
          padding: 100px 0 50px;
        }'
      >
        <Container>
          <Flex
            css={css`
              align-items: center;

              @media (min-width: 980px) {
                flex-direction: column;
                gap: 0;
              }
            `}
          >
            <StaticImage
              src='../images/identity-icon.png'
              alt='identity'
              placeholder='blurred'
              objectFit='contain'
              css={css`
                height: 60px;
              `}
            />
            <SectionTitle>Identity</SectionTitle>
            <Subtitle>The Importance of Who You Are</Subtitle>
          </Flex>
          <p>
            In order to change one's identity, one needs to shift one's actions
            to new ways of “being”. The first step in doing so is to discover
            the identity you are living in now from a new perspective. When
            designing a new identity, you set up practices to stand in the new
            identity you are creating - as your identity changes, so will your
            actions and how you function in life.
          </p>
          <p
            css={css`
              margin-bottom: 0;
            `}
          >
            When designing yourself and your identity in personal relationships,
            or in business, the new actions you are taking, and who you are
            “being” as you take those new actions, initiates change in other
            people's interpretation of you. New interpretations reveal new
            opportunities.
          </p>
        </Container>
      </Section>
      <Section
        styles='          
        background: #f5f5f5;
        padding: 25px 0 50px;

        @media (min-width: 768px) {
          padding: 25px 0 100px;
        }

        @media (min-width: 980px) {
          padding: 50px 0 100px;
        }'
      >
        <Container>
          <Flex
            css={css`
              align-items: center;

              @media (min-width: 980px) {
                flex-direction: column;
                gap: 0;
              }
            `}
          >
            <StaticImage
              src='../images/somatics-icon.png'
              alt='identity'
              placeholder='blurred'
              objectFit='contain'
              css={css`
                height: 60px;
              `}
            />
            <SectionTitle>Somatics</SectionTitle>
            <Subtitle>The Role the Body Plays</Subtitle>
          </Flex>
          <p>
            Somatics - unified mind and body practices, support the ability of
            each individual to find their own personal “center.” Being present
            to your body, your mood, your thoughts, and your emotions allows you
            to powerfully stand in your choices and actions.
          </p>
        </Container>
      </Section>
      <CallToActionSection ctaImage={ctaImage} copy={false} />
    </Layout>
  );
};

export default CoreValues;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    coreValuesHero: file(relativePath: { eq: "core-values-hero.jpg" }) {
      ...fluidImage
    }
    ctaImage: file(relativePath: { eq: "values-cta-image.jpg" }) {
      ...fluidImage
    }
  }
`;
