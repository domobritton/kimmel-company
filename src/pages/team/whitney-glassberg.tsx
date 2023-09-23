import { PageProps, graphql } from 'gatsby';
import Layout from '../../components/Layout';
import { Container } from '../../components/styles';
import TeamMember from '../../components/TeamMember';
import { css } from '@emotion/react';
import { TeamImageData } from '../../components/types';
import Section from '../../components/Section';

const paragraphs = [
  {
    id: 0,
    copy: `Whitney Glassberg is a seasoned business leader and media strategist with over two decades of expertise spanning entertainment, tech, and the creator economy. Over the past 8 years, Whitney has been at the forefront of entertainment and creator partnerships for Meta (encompassing Facebook, Instagram, and Oculus), excelling in team building, cross-functional leadership, cultivating impactful partnerships that drive growth, brand development, executive coaching, and crisis management for both brands and individuals.`,
  },
  {
    id: 1,
    copy: `Before her foray into the tech world, Whitney established herself as a distinguished publicist in movies and entertainment. She specialized in orchestrating award campaigns that achieved an impressive 59+ Oscar nominations and 15 wins. Whitney's career began as an on-camera news reporter, demonstrating her versatility. Alongside her professional endeavors, she holds a deep passion for diversity, inclusion, and community building.`,
  },
];

interface Props extends PageProps {
  data: TeamImageData;
}

export const WhitneyGlassberg = ({ data }: Props): JSX.Element => {
  return (
    <Layout>
      <Section>
        <Container
          css={css`
            padding-top: 50px;
          `}
        >
          <TeamMember
            imageData={data.whitneyGlassberg}
            imageAlt='Whitney Glassberg'
            name='Whitney Glassberg'
            paragraphs={paragraphs}
            linkedIn='https://www.linkedin.com/in/whitneyk/'
          />
        </Container>
      </Section>
    </Layout>
  );
};

export default WhitneyGlassberg;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    whitneyGlassberg: file(relativePath: { eq: "whitney-glassberg.jpg" }) {
      ...fluidImage
    }
  }
`;
