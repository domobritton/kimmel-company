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
    copy: `Phil Hallstein is a business consultant, organizational designer, and executive coach dedicated to helping business leaders and managers build powerful teams. He specializes in the fields of technology, energy, telecommunications and finance throughout his 30-year career.`,
  },
  {
    id: 1,
    copy: `In 2005, he founded the Upside Group, a leadership development firm that creates service cultures of greater accountability, commitment, and ownership. His clients learn to generate faster cycle times, more responsive business processes, better-coordinated management teams, and higher levels of customer satisfaction.`,
  },
  {
    id: 2,
    copy: `Previously a partner for 7 years in SportsMind, an innovative leadership development company, he designed and led long-term leadership programs for thousands of managers that transformed the cultures of several fast-growing companies such Capital One and Frontier Communications.`,
  },
  {
    id: 3,
    copy: `In 1995, he co-founded Business Design Associates, an international consulting firm, where he designed and conducted numerous culture change engagements to improve executive teamwork and business processes around the world: ABB in Sweden, Agip Petroli in Italy, and Ontario Hydro in Toronto.`,
  },
  {
    id: 4,
    copy: `Phil has a strong interest in how the body, mind and spirit blend so that people can have effective, satisfied and productive lives. He is a certified Somatic Coach and lives with his wife and two daughters in Marin County, California.`,
  },
];

interface Props extends PageProps {
  data: TeamImageData;
}

export const PhilHallstein = ({ data }: Props): JSX.Element => {
  return (
    <Layout>
      <Section>
        <Container
          css={css`
            padding-top: 50px;
          `}
        >
          <TeamMember
            imageData={data.philHallstein}
            imageAlt='Phil Hallstein'
            name='Phil Hallstein'
            paragraphs={paragraphs}
            email='phil@kimmelandcompany.com'
            linkedIn='https://www.linkedin.com/in/philip-hallstein-1617265/'
          />
        </Container>
      </Section>
    </Layout>
  );
};

export default PhilHallstein;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    philHallstein: file(relativePath: { eq: "phil-hallstein.jpg" }) {
      ...fluidImage
    }
  }
`;
