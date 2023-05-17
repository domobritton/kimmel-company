import { PageProps, graphql } from 'gatsby';
import Layout from '../components/Layout';
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
  getImage,
} from 'gatsby-plugin-image';
import Hero from '../components/Hero';
import {
  Column,
  Container,
  Flex,
  HeroContent,
  HeroTitle,
  ListItem,
  StyledLink,
} from '../components/styles';
import Section from '../components/Section';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import BookSection from '../components/Home/BookSection';

const PaveWayTitle = styled.h2`
  font-weight: 300;
  font-size: 2em;
  color: #ffffff;
  margin: 0 0 24px;

  @media (min-width: 768px) {
    font-size: 2.5em;
  }
`;

const SectionTitle = styled.h3`
  font-weight: 300;
  font-size: 2em;
  color: #4e6a65;
  margin: 0 0 16px;

  @media (min-width: 768px) {
    font-size: 2.5em;
  }
`;

interface ImageData {
  servicesHero: IGatsbyImageData;
  quoteImage: IGatsbyImageData;
  selfBook: IGatsbyImageData;
}

interface Props extends PageProps {
  data: ImageData;
}

export const Services = ({ data }: Props): JSX.Element => {
  const image = getImage(data.servicesHero);
  const quoteImage = getImage(data.quoteImage);
  const bookImage = getImage(data.selfBook);
  return (
    <Layout>
      {image && (
        <Hero image={image} alt='Busy office workers going places'>
          <HeroContent>
            <Container>
              <HeroTitle>Services</HeroTitle>
            </Container>
          </HeroContent>
        </Hero>
      )}
      <Section
        styles={`
        background: #4e6a65;
        `}
      >
        <Container>
          <PaveWayTitle>Paving the Way</PaveWayTitle>
          <p
            css={css`
              color: #ffffff;
            `}
          >
            Kimmel & Company's core commitment is to reveal people’s brilliance,
            using language as an integral tool to achieve that result!
          </p>
          <p
            css={css`
              color: #ffffff;
            `}
          >
            When people discover the profound “technology of language and
            speaking”, there is a shift in their understanding of their ability
            to produce results. They find that being a powerful team member is a
            function of speaking and knowingly using words that bring forth new
            realities at the moment of speech. People who experience this shift
            in perception gain a new relationship with work and their expression
            of life produces a sense of joy, understanding, and excitement.
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <Flex>
            <Column
              css={css`
                margin-bottom: 48px;

                @media (min-width: 980px) {
                  margin-bottom: 0;
                }
              `}
            >
              <Flex
                css={css`
                  align-items: center;

                  @media (min-width: 980px) {
                    flex-direction: column;
                    gap: 0;
                  }
                `}
              >
                <StaticImage
                  src='../images/coaching-icon.png'
                  alt='coaching'
                  placeholder='blurred'
                  objectFit='contain'
                  css={css`
                    height: 60px;
                  `}
                />
                <SectionTitle>Coaching</SectionTitle>
                <p
                  css={css`
                    margin-bottom: 24px;
                  `}
                >
                  True coaching occurs when individuals experience empowerment
                  to fulfill their declared intention. Coaching people in the
                  technology of “Living in Language” gives them a new
                  perspective that guides them to realizing effective, efficient
                  and dynamic actions. The use of strategic listening with
                  clients provides clarity and effective priority analysis.
                  Additionally, in the corporate setting, exploring the dynamics
                  of the client's company, its operations, key objectives and
                  personnel support are central to aligning breakthroughs that
                  lead to powerful results.
                </p>
                <StyledLink to='/coaching'>Learn More</StyledLink>
              </Flex>
            </Column>
            <Column>
              <Flex
                css={css`
                  align-items: center;

                  @media (min-width: 980px) {
                    flex-direction: column;
                    gap: 0;
                    height: 100%;
                  }
                `}
              >
                <div
                  css={css`
                    flex: 1 0 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  `}
                >
                  <StaticImage
                    src='../images/courses-icon.png'
                    alt='courses'
                    placeholder='blurred'
                    objectFit='contain'
                    css={css`
                      height: 60px;
                    `}
                  />
                  <SectionTitle>Courses</SectionTitle>
                  <p
                    css={css`
                      margin-bottom: 24px;
                    `}
                  >
                    Our courses are designed to coach individuals and
                    organizations to be highly effective in their daily work and
                    ability to produce results. That effectiveness is realized
                    through tools such as the Power of Language, Speech Acts and
                    Strategic Listening. Participants will gain a new
                    perspective on their work and the actions needed to
                    effectively expand their capabilities in all areas of job
                    and personal responsibility.
                  </p>
                </div>
                <StyledLink to='/courses'>Learn More</StyledLink>
              </Flex>
            </Column>
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionTitle
            css={css`
              color: #3a3a3a;
              text-align: center;
            `}
          >
            Results
          </SectionTitle>
          <Flex>
            <Column>
              <ul
                css={css`
                  margin-bottom: 48px;

                  @media (min-width: 980px) {
                    margin: 0;
                  }
                `}
              >
                <ListItem>Productivity increases</ListItem>
                <ListItem>
                  Breakdowns become the doorways to breakthroughs
                </ListItem>
                <ListItem>
                  An enhanced ability to be aligned with fellow workers
                </ListItem>
                <ListItem>Communication skills are improved</ListItem>
                <ListItem>
                  Conflict is handled openly with honest resolution
                </ListItem>
                <ListItem>Personal confidence is heightened</ListItem>
                <ListItem>People think "smarter"</ListItem>
                <ListItem>Powerful futures are designed</ListItem>
                <ListItem>Corporate production goes up</ListItem>
              </ul>
            </Column>
            <Column>
              {quoteImage && (
                <GatsbyImage
                  image={quoteImage}
                  alt={`There isn't a person anywhere who isn't capable of doing more that he thinks he can.`}
                />
              )}
            </Column>
          </Flex>
        </Container>
      </Section>
      <BookSection
        bookImage={bookImage}
        reverse
        title={
          <h4
            css={css`
              font-size: 1.25em;
            `}
          >
            Available on Amazon
          </h4>
        }
        copy={
          <p
            css={css`
              margin-bottom: 24px;
            `}
          >
            <b>SELF</b> is a journey, one that engages a shift in awareness to a
            new way of Being that is in alignment with the world we live in.
            These chapters naturally lead us to who we can see ourselves Being,
            creating a life that will allow us to make the contribution we came
            to make while discovering a more peaceful and engaged reality.
          </p>
        }
      />
    </Layout>
  );
};

export default Services;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    servicesHero: file(relativePath: { eq: "services-hero.jpg" }) {
      ...fluidImage
    }
    quoteImage: file(relativePath: { eq: "quote-image.jpg" }) {
      ...fluidImage
    }
    selfBook: file(relativePath: { eq: "self-book-joel-b-kimmel.jpg" }) {
      ...fluidImage
    }
  }
`;
