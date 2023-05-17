import { PageProps, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import Hero from '../components/Hero';
import {
  Container,
  HeroContent,
  HeroTitle,
  SectionTitle,
  SectionTitle2,
} from '../components/styles';
import EmailSignupSection from '../components/Home/EmailSignupSection';
import Section from '../components/Section';
import { css } from '@emotion/react';
import {
  faEnvelope,
  faHouse,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ImageData {
  contactHero: IGatsbyImageData;
  emailSignup: IGatsbyImageData;
  footerImage: IGatsbyImageData;
}

interface Props extends PageProps {
  data: ImageData;
}

export const Contact = ({ data }: Props): JSX.Element => {
  const image = getImage(data.contactHero);
  const emailImage = getImage(data.emailSignup);
  const footerImage = getImage(data.footerImage);
  return (
    <Layout>
      {image && (
        <Hero image={image} alt='Marin County forest bridge'>
          <HeroContent>
            <Container>
              <HeroTitle>Contact Us</HeroTitle>
            </Container>
          </HeroContent>
        </Hero>
      )}
      <Section
        styles='
      padding-bottom: 25px; 
      @media (min-width: 768px) { 
        padding-bottom: 0;
      }
      @media (min-width: 980px) { 
        padding-bottom: 0;
        }'
      >
        <Container>
          <SectionTitle
            css={css`
              color: #28678b;
              text-align: center;
              margin-bottom: 0;
            `}
          >
            We'd love to hear from you!
          </SectionTitle>
          <SectionTitle2
            css={css`
              font-size: 1.5em;
            `}
          >
            Want to learn more about our courses or coaching services?
          </SectionTitle2>
          <p>Reach out to:</p>
          <p>
            <FontAwesomeIcon
              icon={faEnvelope}
              css={css`
                margin-right: 12px;
                color: #28678b;
              `}
            />
            <b>Email: </b> info at kimmelandcompany.com
          </p>
          <p>
            <FontAwesomeIcon
              icon={faHouse}
              css={css`
                margin-right: 12px;
                color: #28678b;
              `}
            />
            <b>Office:</b> 651.261.8566
          </p>
          <p>
            <FontAwesomeIcon
              icon={faPerson}
              css={css`
                margin: 0 12px 0 4px;
                color: #28678b;
              `}
            />
            <b>Joel Kimmel:</b> 415.310.0725
          </p>
          <p>
            <FontAwesomeIcon
              icon={faPerson}
              css={css`
                margin: 0 12px 0 4px;
                color: #28678b;
              `}
            />
            <b>Judy Addicott Kimmel:</b> 415.250.0487
          </p>
          <p>
            <FontAwesomeIcon
              icon={faPerson}
              css={css`
                margin: 0 12px 0 4px;
                color: #28678b;
              `}
            />
            <b>Angela Beissel:</b> 651.261.8566
          </p>
        </Container>
      </Section>
      <EmailSignupSection emailImage={emailImage} />
      <Section large={false}>
        {footerImage && (
          <GatsbyImage
            image={footerImage}
            alt='Marin coast'
            css={css`
              max-height: 500px;
              width: 100%;
            `}
          />
        )}
      </Section>
    </Layout>
  );
};

export default Contact;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    contactHero: file(relativePath: { eq: "contact-hero.jpg" }) {
      ...fluidImage
    }
    emailSignup: file(relativePath: { eq: "email-signup.jpg" }) {
      ...fluidImage
    }
    footerImage: file(relativePath: { eq: "contact-footer-top.jpg" }) {
      ...fluidImage
    }
  }
`;
