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
    copy: `Laura Gates, founder of Gates Group LLC, has spent the last 25 years as a thought leader, consultant and executive coach in the field of leadership and organizational change. She leads workshops, facilitates team building, mentors start-up C-suite executives and coaches her clients to be more effective leaders by tapping their innovation and creativity. Laura’s clients have included Shell Oil, Visa, NASA, LinkedIn, the Navy, FAA, NNSA, AT+T, M+T Bank, Capital One, LexisNexis, and Quaker Chemical as well as VC-backed tech and bio tech start-ups. Laura is an ICF PCC Certified coach, a certified Marshall Goldsmith Stakeholder Centered Coach and a sought-after speaker on topics of leadership. She has developed the Leading on PurposeTM methodology to train future leaders. She holds a BA in Marketing and Management from Syracuse University.`,
  },
];

interface Props extends PageProps {
  data: TeamImageData;
}

export const LauraGates = ({ data }: Props): JSX.Element => {
  return (
    <Layout>
      <Section>
        <Container
          css={css`
            padding-top: 50px;
          `}
        >
          <TeamMember
            imageData={data.lauraGates}
            imageAlt='Laura Gates'
            name='Laura Gates'
            title='Executive Coach'
            paragraphs={paragraphs}
            email='laura@laurafrancesgates.com'
            linkedIn='https://www.linkedin.com/in/lauragates/'
          />
        </Container>
      </Section>
    </Layout>
  );
};

export default LauraGates;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    lauraGates: file(relativePath: { eq: "laura-gates.jpg" }) {
      ...fluidImage
    }
  }
`;
