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
    copy: `Joel Kimmel's career has focused on building highly successful organizations grounded, powerful, and effective communication. His private clients experience the benefit of individual creativity, an intimate sense of their unique brilliance, and a personal commitment to themselves and their work environment.`,
  },
  {
    id: 1,
    copy: `He consults with numerous leading edge coaching firms including Turning Points Inc., BizFutures - consultants to Pike's Place Fish and The Williams Group. His extensive experience leading corporate trainings, consulting on problem-solving and team intervention, and coaching individuals and management to increased productivity are well established.`,
  },
  {
    id: 2,
    copy: `Joel has developed a unique consulting technology based on “Ontology” - the study of “Being”. He continues his inquiry into “the power of language” and “the technology of speaking” and their relationship to personal and business leadership and success. Joel's consulting has included start-ups and long-term management of viable, successful small businesses, franchises, and international corporations. His diverse background includes being a small business owner, Executive Consultant, an “Ontological Design” coach, Keynote Speaker, ultra runner, national rowing champion, Vietnam veteran, and ongoing community volunteer.`,
  },
];

interface Props extends PageProps {
  data: TeamImageData;
}

export const JoelKimmel = ({ data }: Props): JSX.Element => {
  return (
    <Layout>
      <Section>
        <Container
          css={css`
            padding-top: 50px;
          `}
        >
          <TeamMember
            imageData={data.joelKimmel}
            imageAlt='Joel Kimmel'
            name='Joel Kimmel'
            title='CEO'
            paragraphs={paragraphs}
            email='joel@kimmelandcompany.com'
            linkedIn='https://www.linkedin.com/in/joel-kimmel-600a947/'
            facebook='https://www.facebook.com/kimmelandco/?hc_ref=ARTa7B1lwA8LJq_tHzLulOXihR_zkBK6LHuNMq41YN3T-HiBJpmAdtSNUbQ43xssoy4'
          />
        </Container>
      </Section>
    </Layout>
  );
};

export default JoelKimmel;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    joelKimmel: file(relativePath: { eq: "joel-kimmel.jpg" }) {
      ...fluidImage
    }
  }
`;
