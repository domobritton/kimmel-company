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
    copy: `Linda brings twenty years of corporate experience to her executive coaching and consulting practice. She has held officer and VP positions at U.S. Bancorp and The Harris Bank of Chicago. Since 2003 she has worked with hundreds of senior level executives, high potential leaders and successful entrepreneurs to be more effective and fulfilled in their life and work.`,
  },
  {
    id: 1,
    copy: `During her tenure at Visa USA, she led an award-winning business development team, negotiating multi- million dollar agreements with Fortune 500 companies such as AT&T, Direct TV, AOL Time Warner, USA Today and State Farm Insurance. Under her leadership, these industry segments grew three times faster than VISA USA's growth overall.`,
  },
  {
    id: 2,
    copy: `Linda attended DePaul University and has done post-graduate work at the University of Chicago's Graham School of Continuing Education, the American Management Association, and Visa's Bank Card Management School.`,
  },
  {
    id: 3,
    copy: `She is a graduate of the Integral Coaching Program at New Ventures West, which is accredited by the International Coaching Federation. She has served on their certification committee and adjunct faculty, mentoring future coaches through the practicum and certification process.`,
  },
  {
    id: 4,
    copy: `Linda has been a dialogue facilitator for Santa Clara Universities Global Women's Leadership Network an international network of women leaders who dare to transform their organizations, their communities, and the world.`,
  },
  {
    id: 5,
    copy: `She is passionate about environmental issues and is an active supporter and volunteer for The Pachamama Alliance. She is also a trained facilitator of the “Awakening the Dreamer, Changing the Dream” Symposium, and sits on the Advisory Board of The Soul of Money Institute.`,
  },
  {
    id: 6,
    copy: `Linda is a 'recovered fundamentalist' and mentors people through spiritual transitions. She is currently seeking a publisher for her recently completed memoir about spiritual shunning titled “Leaving the Fold: How I Lost My Religion and Found Spiritual Grace.” You can learn more at `,
    link: {
      href: 'https://www.LeavingTheFold.com',
      text: 'www.LeavingTheFold.com'
    }
  }
];

interface Props extends PageProps {
  data: TeamImageData;
}

export const LindaCurtis = ({ data }: Props): JSX.Element => {
  return (
    <Layout>
      <Section>
        <Container
          css={css`
            padding-top: 50px;
          `}
        >
          <TeamMember
            imageData={data.lindaCurtis}
            imageAlt='Linda Curtis'
            name='Linda Curtis'
            paragraphs={paragraphs}
            email='linda@kimmelandcompany.com'
            linkedIn='https://www.linkedin.com/in/lindaacurtis/'
            facebook='https://www.facebook.com/HonorableClosure.LindaCurtis'
          />
        </Container>
      </Section>
    </Layout>
  );
};

export default LindaCurtis;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    lindaCurtis: file(relativePath: { eq: "linda-curtis.jpg" }) {
      ...fluidImage
    }
  }
`;
