import { PageProps, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import Hero from '../components/Hero';
import {
  Container,
  Grid,
  HeroContent,
  HeroTitle,
  SectionTitle,
  SectionTitle2,
} from '../components/styles';
import Section from '../components/Section';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import CallToActionSection from '../components/Home/CallToActionSection';

const CategoryGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-template-rows: repeat(auto-fit, 1fr);
  column-gap: 48px;
  row-gap: 48px;

  @media (min-width: 1280px) {
    column-gap: 80px;
  }
`;

interface ImageData {
  coursesHero: IGatsbyImageData;
  ctaImage: IGatsbyImageData;
}

interface Props extends PageProps {
  data: ImageData;
}

export const Courses = ({ data }: Props): JSX.Element => {
  const image = getImage(data.coursesHero);
  const ctaImage = getImage(data.ctaImage);
  return (
    <Layout>
      {image && (
        <Hero
          image={image}
          alt='San Francisco skyline'
          heroStyles='background: #000000;'
          gridStyles='& > .courses-hero { opacity: 0.7; }'
          className='courses-hero'
        >
          <HeroContent>
            <Container>
              <HeroTitle>Courses</HeroTitle>
            </Container>
          </HeroContent>
        </Hero>
      )}
      <Section styles='background: #28678b;'>
        <Container>
          <SectionTitle>Living in Language Courses</SectionTitle>
          <p
            css={css`
              color: #ffffff;
            `}
          >
            Using easily understandable models of the nature of “being” and how
            humans function, our work brings together a combination of
            disciplines that reopen one's vision and ability to generate a
            magnificent future. At each moment you are at the threshold of
            unlimited possibilities.
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <CategoryGrid>
            <div>
              <SectionTitle2>Living in Language</SectionTitle2>
              <p>
                We live in language, much the same way a fish lives in water.
                Learning the technology behind that language will allow you and
                your company to powerfully move into the future.
              </p>
            </div>
            <div>
              <SectionTitle2>Art of Listening</SectionTitle2>
              <p>
                An inquiry into the “art of listening” and designing a future
                that gets you out of bed every morning ready to take on your
                life! Creating a space within where you trust living in the
                unknown and are willing to have extraordinary results happen
                will become commonplace occurrences.
              </p>
            </div>
            <div>
              <SectionTitle2>Organizations as Conversations</SectionTitle2>
              <p>
                Using our new “technology of language and communication”, each
                participant experiences their ability to design and bring forth
                contributions to the organization they had not considered
                before. They are empowered to trust the team and be an active
                participant in designing the powerful future for the
                organization.
              </p>
            </div>
            <div>
              <SectionTitle2>Speaking from the Future Now</SectionTitle2>
              <p>
                When people speak the world shifts and limitless possibilities
                present themselves. Each word evokes a future that is either
                realized or not. It is the intention behind the words that
                determine what future will take place. This course is perfect
                for team building, project management, and product design.
              </p>
            </div>
            <div>
              <SectionTitle2>Living Awake</SectionTitle2>
              <p>
                An advanced course. Excellent for retreats and individuals
                committed to mastering their life practices. This course is
                three full days in length and can be extended to include a
                personal challenge day of outdoor activities.
              </p>
            </div>
          </CategoryGrid>
        </Container>
      </Section>
      <CallToActionSection ctaImage={ctaImage} copy={false} />
    </Layout>
  );
};

export default Courses;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    coursesHero: file(relativePath: { eq: "courses-hero.jpg" }) {
      ...fluidImage
    }
    ctaImage: file(relativePath: { eq: "values-cta-image.jpg" }) {
      ...fluidImage
    }
  }
`;
