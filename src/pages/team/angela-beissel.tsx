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
    copy: `Angela has a life long commitment to be an active listener and learner. Currently, she is developing her competence in leading somatic and experiential components with an innovative leadership company, who creates high performing teams. She has committed herself and is training to become an integral coach. As an integral coach, Angela works with clients by attending to the whole person, mind, body, and spirit.`,
  },
  {
    id: 1,
    copy: `As part of the Kimmel & Company team Angela embodies the capacity to fulfill multiple requests/projects with care and impeccable results while fully supporting Kimmel & Company’s vision. She is always delighted and willing to learn and take on additional roles. She is technically proficient, leads by example through her commitment and hard work, and builds quick rapport with clients and colleagues.`,
  },
  {
    id: 2,
    copy: `Angela brings with her a degree in communications and business and background in the magazine and online publishing industry. She currently resides in Denver, Colorado where she plays competitive tennis, practices yoga, enjoys traveling and outdoor activities like camping, hiking and fishing.`,
  },
];

interface Props extends PageProps {
  data: TeamImageData;
}

export const AngelaBeissel = ({ data }: Props): JSX.Element => {
  return (
    <Layout>
      <Section>
        <Container
          css={css`
            padding-top: 50px;
          `}
        >
          <TeamMember
            imageData={data.angelaBeissel}
            imageAlt='Angela Beissel'
            name='Angela Beissel'
            paragraphs={paragraphs}
            email='angela@kimmelandcompany.com'
            linkedIn='https://www.linkedin.com/in/angela-beissel-1b99233/'
          />
        </Container>
      </Section>
    </Layout>
  );
};

export default AngelaBeissel;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    angelaBeissel: file(relativePath: { eq: "angela-beissel.jpg" }) {
      ...fluidImage
    }
  }
`;
