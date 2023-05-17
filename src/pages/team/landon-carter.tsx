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
    copy: `Landon Carter is a graduate of Yale University and Harvard Business School. He has spent more than 30 years in the human potential/spiritual awareness movement as a student, trainer, coach, and guide. He has worked with over 70,000 people through organizations he either founded or in which he was a principle trainer/workshop leader: est (now Landmark Education), Lifespring, Dynamic Financial Presentations, Career Development Team, Active Learning Inc., Human Factors Inc., and International Learning Dynamics.`,
  },
  {
    id: 1,
    copy: `Landon Carter's Website and Book: `,
    link: {
      href: 'https://www.landoncarter.com/',
      text: 'Living Awake',
    },
  },
];

interface Props extends PageProps {
  data: TeamImageData;
}

export const LandonCarter = ({ data }: Props): JSX.Element => {
  return (
    <Layout>
      <Section>
        <Container
          css={css`
            padding-top: 50px;
          `}
        >
          <TeamMember
            imageData={data.landonCarter}
            imageAlt='Landon Carter'
            name='Landon Carter'
            paragraphs={paragraphs}
            email='landon@kimmelandcompany.com'
            linkedIn='https://www.linkedin.com/in/landon-carter-b2539813/'
          />
        </Container>
      </Section>
    </Layout>
  );
};

export default LandonCarter;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    landonCarter: file(relativePath: { eq: "landon-carter.jpg" }) {
      ...fluidImage
    }
  }
`;
