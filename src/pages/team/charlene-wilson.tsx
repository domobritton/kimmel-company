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
    copy: `Charlene supports her executive clients as they navigate strategic, organizational and interpersonal challenges and turn setbacks into learning opportunities. She is particularly adept at helping senior leaders gain awareness around the blind spots that are holding them back from advancing to the next level.`,
  },
  {
    id: 1,
    copy: `Charlene is an Executive Coach, Curriculum Designer and Facilitator with 20 years of experience in leadership development. Her clients have included executives from Capital One, M&T Bank, NAVAIR, NASA and Heron Foundation. She has trained Ontological Design, Positive Neuroplasticity, Somatic Leadership and Ego Coaching. She is an ICF certified coach.`,
  },
  {
    id: 2,
    copy: `In addition, Charlene is a 360° Feedback Specialist and has conducted over 2,500 interviews across a wide range of industries for VP and C-level employees of public and private companies; Executive Directors and senior leadership of nonprofits; high-ranking (SES-level) civil servants; and many others. She has coached those same leaders in teams and as individuals.`,
  },
  {
    id: 3,
    copy: `“I believe deeply in the power of coaching and the change it can bring. I believe that there is deeper, wiser part of ourselves waiting to emerge and all we need is the courage to heed the call. Coaching gives us to space to hear the call and the skills to know what to do next.”`,
  },
];

interface Props extends PageProps {
  data: TeamImageData;
}

export const CharleneWilson = ({ data }: Props): JSX.Element => {
  return (
    <Layout>
      <Section>
        <Container
          css={css`
            padding-top: 50px;
          `}
        >
          <TeamMember
            imageData={data.charWilson}
            imageAlt='Charlene Wilson'
            name='Charlene Wilson'
            title='Executive Coach, M.A., ACC'
            paragraphs={paragraphs}
            email='charlene@resilientleadership.us'
            linkedIn='https://www.linkedin.com/in/charlene-e-wilson-m-a-acc-8114283/'
            facebook='https://www.facebook.com/resilientleadershipcoaching'
          />
        </Container>
      </Section>
    </Layout>
  );
};

export default CharleneWilson;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    charWilson: file(relativePath: { eq: "charlene-wilson.jpg" }) {
      ...fluidImage
    }
  }
`;
