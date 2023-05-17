import { Link, HeadFC, PageProps, graphql } from 'gatsby';
import { IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import {
  Container,
  HeroContent,
  HeroTitle,
  SectionTitle,
  SectionTitle2,
  StyledButton,
  StyledLink,
} from '../components/styles';
import Section from '../components/Section';
import { css } from '@emotion/react';

interface ImageData {
  pageImage: IGatsbyImageData;
}

interface Props extends PageProps {
  data: ImageData;
}

const NotFoundPage = ({ data }: Props): JSX.Element => {
  const image = getImage(data.pageImage);
  return (
    <Layout>
      {image && (
        <Hero image={image} alt='Marin County forest bridge'>
          <HeroContent>
            <Container>
              <HeroTitle>Oops!</HeroTitle>
              <SectionTitle>
                It looks like you've wandered off the beaten path.
              </SectionTitle>
            </Container>
          </HeroContent>
        </Hero>
      )}
      <Section>
        <Container
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          <SectionTitle2>Return to safety</SectionTitle2>
          <StyledLink to='/'>Home</StyledLink>
        </Container>
      </Section>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    pageImage: file(relativePath: { eq: "contact-footer-top.jpg" }) {
      ...fluidImage
    }
  }
`;
