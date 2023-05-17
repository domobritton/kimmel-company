import { Link, HeadFC, PageProps, graphql } from 'gatsby';
import { IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Container, HeroContent, HeroTitle } from '../components/styles';

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
            </Container>
          </HeroContent>
        </Hero>
      )}
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
