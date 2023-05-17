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
    copy: `Born in Washington DC, and having had multiple experiences living abroad, Ms. Kimmel has spent her life building bridges in the areas of education, personal growth, and transformative project implementation. Her career encompasses the fields of elementary education, retail and franchise management, conflict resolution and nonprofit mentoring. She has played strategic roles at the Hawken Country Day School, the est Foundation, as franchisee and marketing consultant to Supercuts Corporation, the Beyond War Foundation, Primo’s Coffee Inc. as owner, as a 2004 California Presidential Campaign Coordinator, and in Kimmel and Company, as coach and partner.`,
  },
  {
    id: 1,
    copy: `Ms. Kimmel is a trained conflict mediator, workshop leader and speaker to professional, academic and service organizations. She is dedicated to the reduction and prevention of violence, and the incorporation of ethical values in business, politics, and government. A world-class gold medal rower, she is passionate about teamwork, positive results and the role the individual plays in making change. Ms. Kimmel is dedicated to activism and transformed relationships within family, community, and business. She continues consulting in the private and public sectors and serves on a number of national and regional nonprofit Boards.`,
  },
];

interface Props extends PageProps {
  data: TeamImageData;
}

export const JudyKimmel = ({ data }: Props): JSX.Element => {
  return (
    <Layout>
      <Section>
        <Container
          css={css`
            padding-top: 50px;
          `}
        >
          <TeamMember
            imageData={data.judyKimmel}
            imageAlt='Judy Addicott Kimmel'
            name='Judy Addicott Kimmel'
            title='Principal, Kimmel & Company'
            paragraphs={paragraphs}
            email='judy@kimmelandcompany.com'
            linkedIn='https://www.linkedin.com/in/judy-kimmel-045b48/'
            facebook='https://www.facebook.com/kimmelandco/?hc_ref=ARTa7B1lwA8LJq_tHzLulOXihR_zkBK6LHuNMq41YN3T-HiBJpmAdtSNUbQ43xssoy4'
          />
        </Container>
      </Section>
    </Layout>
  );
};

export default JudyKimmel;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    judyKimmel: file(relativePath: { eq: "judy-kimmel.jpg" }) {
      ...fluidImage
    }
  }
`;
