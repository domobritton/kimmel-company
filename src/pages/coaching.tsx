import { PageProps, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import Hero from '../components/Hero';
import {
  Column,
  Container,
  Flex,
  HeroContent,
  HeroTitle,
} from '../components/styles';
import Section from '../components/Section';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CallToActionSection from '../components/Home/CallToActionSection';

const SectionTitle = styled.h2`
  font-weight: 300;
  font-size: 2em;
  color: #ffffff;
  margin: 0 0 24px;

  @media (min-width: 768px) {
    font-size: 2.5em;
  }
`;

const SectionTitle2 = styled.h3`
  font-weight: 300;
  font-size: 2em;
  margin: 0 0 16px;
  text-align: center;
`;

interface ImageData {
  coachingHero: IGatsbyImageData;
  ctaImage: IGatsbyImageData;
}

interface Props extends PageProps {
  data: ImageData;
}

export const Coaching = ({ data }: Props): JSX.Element => {
  const image = getImage(data.coachingHero);
  const ctaImage = getImage(data.ctaImage);
  return (
    <Layout>
      {image && (
        <Hero image={image} alt='Woman working at computer'>
          <HeroContent>
            <Container>
              <HeroTitle>Coaching</HeroTitle>
            </Container>
          </HeroContent>
        </Hero>
      )}
      <Section styles='background: #2b3e4c;'>
        <Container>
          <SectionTitle>Our Coaching Services</SectionTitle>
          <p
            css={css`
              color: #ffffff;
            `}
          >
            True coaching occurs when individuals experience empowerment to
            fulfill their declared intention. Coaching people in the technology
            of “Living in Language” gives them a new perspective that guides
            them to realize effective, efficient and dynamic actions. The use of
            strategic listening with clients provides clarity and effective
            priority analysis. Additionally, in the corporate setting, exploring
            the dynamics of the client's company, its operations, key objectives
            and personal vision are central to aligning breakthroughs, which
            lead to powerful results.
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <Flex
            css={css`
              row-gap: 48px;
            `}
          >
            <Column>
              <SectionTitle2>Executive and Invididual Coaching</SectionTitle2>
              <p>
                Using easily understandable models on “The Nature of Being” and
                how humans function somatically and linguistically, our work
                brings together a combination of disciplines that reopen one's
                vision and ability to generate a powerful future. At each moment
                you are at the threshold of unlimited possibilities.
              </p>
            </Column>
            <Column>
              <SectionTitle2>
                Project
                <br />
                Managment
              </SectionTitle2>
              <p>
                Each “project,” whether corporate or individual, holds within it
                a potential to transform you, your team and your organization,
                propelling it to new levels of influence and success. Projects
                are not just “things to do” but rather opportunities to generate
                new insights, expand technology and understanding, and produce
                extraordinary results.
              </p>
            </Column>
            <Column>
              <SectionTitle2>
                Corporate Assessment and Team Building
              </SectionTitle2>
              <p>
                We take a flexible approach to corporate assessment and team
                building by first analyzing present breakdowns and needs, and
                then designing the precise coaching needed to develop premier,
                quality “High Performance” teams for the future. Using proven
                assess-ment tools and personal consultations, new insights and
                alignments appear, moving you and your company toward increased
                efficiency and success.
              </p>
            </Column>
          </Flex>
        </Container>
      </Section>
      <CallToActionSection ctaImage={ctaImage} copy={false} />
    </Layout>
  );
};

export default Coaching;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    coachingHero: file(relativePath: { eq: "coaching-hero.jpg" }) {
      ...fluidImage
    }
    ctaImage: file(relativePath: { eq: "values-cta-image.jpg" }) {
      ...fluidImage
    }
  }
`;
