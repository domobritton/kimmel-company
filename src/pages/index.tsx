import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import Hero from '../components/Hero';
import styled from '@emotion/styled';
import { HeroContent } from '../components/styles';
import BookSection from '../components/Home/BookSection';
import MissionSection from '../components/Home/MissionSection';
import OurCommitmentSection from '../components/Home/OurCommitmentSection';
import EmailSignupSection from '../components/Home/EmailSignupSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import CallToActionSection from '../components/Home/CallToActionSection';
import { css } from '@emotion/react';

const TitleWrapper = styled.div`
  border-radius: 5px;
  border: 2px solid #ffffff;
  width: 80%;
  max-width: 1080px;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-weight: 300;
  font-size: 24px;
  letter-spacing: 3px;
  text-align: center;
  text-shadow: 0.08em 0.08em 0.08em rgba(0, 0, 0, 0.4);

  @media (min-width: 768px) {
    font-size: 60px;
    letter-spacing: 12px;
  }
`;

interface ImageData {
  homeHero: IGatsbyImageData;
  selfBook: IGatsbyImageData;
  languageKey: IGatsbyImageData;
  emailSignup: IGatsbyImageData;
  homeCTA: IGatsbyImageData;
}

interface Props extends PageProps {
  data: ImageData;
}

const IndexPage = ({ data }: Props): JSX.Element => {
  const image = getImage(data.homeHero);
  const bookImage = getImage(data.selfBook);
  const langImage = getImage(data.languageKey);
  const emailImage = getImage(data.emailSignup);
  const ctaImage = getImage(data.homeCTA);
  return (
    <Layout>
      {image && (
        <Hero image={image} alt='Living in Language Consulting'>
          <HeroContent>
            <TitleWrapper>
              <HeroTitle>LIVING IN LANGUAGE CONSULTING</HeroTitle>
            </TitleWrapper>
          </HeroContent>
        </Hero>
      )}
      <BookSection
        bookImage={bookImage}
        copy={
          <p
            css={css`
              margin-bottom: 24px;
            `}
          >
            <b>SELF</b> is a powerful voice adding to our personal world,
            offering a unique and embodied wisdom that reveals the power of our
            words and how we can open or close our relationships through their
            use. Offering each person a path to be authentic and grounded in a
            way that opens the door to a life they can be proud to live, you are
            taken on an unfolding dialogue. With new perspectives and insight,
            the past seems to move aside and the vision you can see yourself
            Being, begins to lead to a more productive, and meaningful life. A
            must read for anyone wanting to experience their own brilliance,
            this book will show you where to look.
          </p>
        }
      />
      <MissionSection />
      <OurCommitmentSection langImage={langImage} />
      <EmailSignupSection emailImage={emailImage} />
      <TestimonialsSection />
      <CallToActionSection ctaImage={ctaImage} />
    </Layout>
  );
};

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    homeHero: file(relativePath: { eq: "home-hero.jpg" }) {
      ...fluidImage
    }
    selfBook: file(relativePath: { eq: "self-book-joel-b-kimmel.jpg" }) {
      ...fluidImage
    }
    languageKey: file(relativePath: { eq: "language-is-the-key.jpg" }) {
      ...fluidImage
    }
    emailSignup: file(relativePath: { eq: "email-signup.jpg" }) {
      ...fluidImage
    }
    homeCTA: file(relativePath: { eq: "home-cta.jpg" }) {
      ...fluidImage
    }
  }
`;

export const Head: HeadFC = () => <title>Kimmel and Company</title>;
