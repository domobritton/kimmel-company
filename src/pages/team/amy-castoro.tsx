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
    copy: `Amy Castoro counsels and advises individuals, and teams on how to collaborate more effectively through language and action. She offers more than two decades of experience of developing leadership competence and executive presence. Amy's notable client list includes: Microsoft, Swarovski, T-Systems SA, Old Mutual, New Jersey Department of Labor, Boehringer Ingelheim, MKS, E.ON Energy, and Avaya.`,
  },
  {
    id: 1,
    copy: `Amy also draws on her 15 plus years of corporate experience with The Walt Disney Company, Adecco Corporation, and Grant Thornton Management Consulting. Coaching experience and skills: Amy enables executives and teams to increase their impact in the organization by more effectively managing commitments, building trust, and managing morale.Her clients recurrently report improved productivity, higher levels of satisfaction, and increased capacity to take action in ambiguity. Her approach centers on embodied learning, where clients are asked to engage in effective action rather than a theoretical framework. Amy enables her clients to increase their impact in their organization by fostering authentic conversations combined with high levels of accountability and commitment and creating a clear purpose from the outset. Clients appreciate her gentle yet direct approach in identifying fundamental and pragmatic behaviors that lead to improved performance.`,
  },
  {
    id: 2,
    copy: `Amy has led executive level Learning Circles for Microsoft Corporation. In this capacity, she worked closely with groups of 5-6 leaders to develop a strategic vision and then cultivate the necessary leadership skill to execute their plan. In addition, Amy has worked internationally with leaders and global teams to increase collaboration, build trust, and improve productivity between partnerships. Expert Coaching Capability: Leadership effectiveness in the areas of building trust, cultivating presence, managing morale, navigating change, collaboration and coordination, action through language, influence, team effectiveness, customer satisfaction, strategic thinking, authentic communication, embodied learning, managing interpersonal relationships.`,
  },
  {
    id: 3,
    copy: `Educational background: Amy has a Bachelor of Arts in Organizational Psychology from Adelphi University. She completed a three-year business course based on the work of Dr. Fernando Flores that emphasized the design of new offers and optimizing threats and opportunities in business. Amy is a Master Somatic Coach through the Strozzi Institute.`,
  },
];

interface Props extends PageProps {
  data: TeamImageData;
}

export const AmyCastoro = ({ data }: Props): JSX.Element => {
  return (
    <Layout>
      <Section>
        <Container
          css={css`
            padding-top: 50px;
          `}
        >
          <TeamMember
            imageData={data.amyCastoro}
            imageAlt='Amy Castoro'
            name='Amy Castoro'
            title='Executive Coach, MSC'
            paragraphs={paragraphs}
            linkedIn='https://www.linkedin.com/in/amycastoro/'
          />
        </Container>
      </Section>
    </Layout>
  );
};

export default AmyCastoro;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    amyCastoro: file(relativePath: { eq: "amy-castoro.jpg" }) {
      ...fluidImage
    }
  }
`;
