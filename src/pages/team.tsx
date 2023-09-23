import { Link, PageProps, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import Hero from '../components/Hero';
import {
  Column,
  Container,
  Flex,
  HeroContent,
  HeroTitle,
} from '../components/styles';
import Section from '../components/Section';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CallToActionSection from '../components/Home/CallToActionSection';

const ButtonContainer = styled.div`
  margin-top: 16px;
`;

const Button = styled(Link)`
  text-decoration: none;
  padding: 0.5em 1em;
  border: 1px solid #3a3a3a;
  border-radius: 24px;
  color: #3a3a3a;
  line-height: 1;
  white-space: nowrap;
`;

const FlexSpace = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const Row = styled(Flex)`
  @media (min-width: 980px) {
    margin-bottom: 48px;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 48px;

  @media (min-width: 980px) {
    margin-bottom: 0;
  }
`;

const ImageContainer = styled.div`
  > div {
    max-height: 500px;
    width: 100%;
  }
`;

const Name = styled.div`
  color: #3a3a3a;
  font-size: 1.5em;
`;

const Title = styled.div`
  color: #3a3a3a;
`;

interface ImageData {
  teamHero: IGatsbyImageData;
  joelKimmel: IGatsbyImageData;
  judyKimmel: IGatsbyImageData;
  angelaBeissel: IGatsbyImageData;
  charWilson: IGatsbyImageData;
  amyCastoro: IGatsbyImageData;
  philHallstein: IGatsbyImageData;
  lindaCurtis: IGatsbyImageData;
  landonCarter: IGatsbyImageData;
  lauraGates: IGatsbyImageData;
  whitneyGlassberg: IGatsbyImageData;
  ctaImage: IGatsbyImageData;
}

interface Props extends PageProps {
  data: ImageData;
}

export const Team = ({ data }: Props): JSX.Element => {
  const image = getImage(data.teamHero);
  const joel = getImage(data.joelKimmel);
  const judy = getImage(data.judyKimmel);
  const angela = getImage(data.angelaBeissel);
  const char = getImage(data.charWilson);
  const amy = getImage(data.amyCastoro);
  const phil = getImage(data.philHallstein);
  const linda = getImage(data.lindaCurtis);
  const landon = getImage(data.landonCarter);
  const laura = getImage(data.lauraGates);
  const whitney = getImage(data.whitneyGlassberg);
  const ctaImage = getImage(data.ctaImage);
  return (
    <Layout>
      {image && (
        <Hero image={image} alt='Woman working at computer'>
          <HeroContent>
            <Container>
              <HeroTitle>Meet The Team</HeroTitle>
            </Container>
          </HeroContent>
        </Hero>
      )}
      <Section>
        <Container>
          <p
            css={css`
              margin-bottom: 48px;
            `}
          >
            As with our clients, the Kimmel & Company team consists of a wide
            spectrum of professionals who are steeped in a variety of career
            disciplines, professional experience, certifications and education.
            They share in common a deep passion for life and a sincere
            commitment to making each personal interaction they encounter a
            contribution to the whole.
          </p>
        </Container>
        <Container>
          <Row>
            <Column>
              <FlexColumn>
                {joel && (
                  <ImageContainer>
                    <GatsbyImage image={joel} alt='joel kimmel' />
                  </ImageContainer>
                )}
                <FlexSpace>
                  <div>
                    <Name>Joel Kimmel</Name>
                    <Title>CEO</Title>
                  </div>
                  <ButtonContainer>
                    <Button to='/team/joel-kimmel'>Meet Joel</Button>
                  </ButtonContainer>
                </FlexSpace>
              </FlexColumn>
            </Column>
            <Column>
              <FlexColumn>
                {judy && (
                  <ImageContainer>
                    <GatsbyImage image={judy} alt='judy kimmel' />
                  </ImageContainer>
                )}
                <FlexSpace>
                  <div>
                    <Name>Judy Addicott Kimmel</Name>
                    <Title>Principal</Title>
                  </div>
                  <ButtonContainer>
                    <Button to='/team/judy-kimmel'>Meet Judy</Button>
                  </ButtonContainer>
                </FlexSpace>
              </FlexColumn>
            </Column>
            <Column>
              <FlexColumn>
                {angela && (
                  <ImageContainer>
                    <GatsbyImage image={angela} alt='angela beissel' />
                  </ImageContainer>
                )}
                <FlexSpace>
                  <div>
                    <Name>Angela Beissel</Name>
                  </div>
                  <ButtonContainer>
                    <Button to='/team/angela-beissel'>Meet Angela</Button>
                  </ButtonContainer>
                </FlexSpace>
              </FlexColumn>
            </Column>
          </Row>
          <Row>
            <Column>
              <FlexColumn>
                {char && (
                  <ImageContainer>
                    <GatsbyImage image={char} alt='charlene wilson' />
                  </ImageContainer>
                )}
                <FlexSpace>
                  <div>
                    <Name>Charlene Wilson</Name>
                    <Title>Executive Coach, M.A, ACC</Title>
                  </div>
                  <ButtonContainer>
                    <Button to='/team/charlene-wilson'>Meet Char</Button>
                  </ButtonContainer>
                </FlexSpace>
              </FlexColumn>
            </Column>
            <Column>
              <FlexColumn>
                {amy && (
                  <ImageContainer>
                    <GatsbyImage image={amy} alt='amy castoro' />
                  </ImageContainer>
                )}
                <FlexSpace>
                  <div>
                    <Name>Amy Castoro</Name>
                    <Title>Executive Coach, MSC</Title>
                  </div>
                  <ButtonContainer>
                    <Button to='/team/amy-castoro'>Meet Amy</Button>
                  </ButtonContainer>
                </FlexSpace>
              </FlexColumn>
            </Column>
            <Column>
              <FlexColumn>
                {phil && (
                  <ImageContainer>
                    <GatsbyImage image={phil} alt='phil hallstein' />
                  </ImageContainer>
                )}
                <FlexSpace>
                  <div>
                    <Name>Phil Hallstein</Name>
                  </div>
                  <ButtonContainer>
                    <Button to='/team/phil-hallstein'>Meet Phil</Button>
                  </ButtonContainer>
                </FlexSpace>
              </FlexColumn>
            </Column>
          </Row>
          <Row>
            <Column>
              <FlexColumn>
                {landon && (
                  <ImageContainer>
                    <GatsbyImage image={landon} alt='landon carter' />
                  </ImageContainer>
                )}
                <FlexSpace>
                  <div>
                    <Name>Landon Carter</Name>
                  </div>
                  <ButtonContainer>
                    <Button to='/team/landon-carter'>Meet Landon</Button>
                  </ButtonContainer>
                </FlexSpace>
              </FlexColumn>
            </Column>
            <Column>
              <FlexColumn>
                {linda && (
                  <ImageContainer>
                    <GatsbyImage image={linda} alt='linda curtis' />
                  </ImageContainer>
                )}
                <FlexSpace>
                  <div>
                    <Name>Linda Curtis</Name>
                  </div>
                  <ButtonContainer>
                    <Button to='/team/linda-curtis'>Meet Linda</Button>
                  </ButtonContainer>
                </FlexSpace>
              </FlexColumn>
            </Column>
            <Column>
              <FlexColumn>
                {whitney && (
                  <ImageContainer>
                    <GatsbyImage image={whitney} alt='whitney glassberg' />
                  </ImageContainer>
                )}
                <FlexSpace>
                  <div>
                    <Name>Whitney Glassberg</Name>
                  </div>
                  <ButtonContainer>
                    <Button to='/team/whitney-glassberg'>Meet Whitney</Button>
                  </ButtonContainer>
                </FlexSpace>
              </FlexColumn>
            </Column>
          </Row>
          <Row>
            <Column>
              <FlexColumn>
                {laura && (
                  <ImageContainer>
                    <GatsbyImage image={laura} alt='laura gates' />
                  </ImageContainer>
                )}
                <FlexSpace>
                  <div>
                    <Name>Laura Gates</Name>
                    <Title>Executive Coach</Title>
                  </div>
                  <ButtonContainer>
                    <Button to='/team/laura-gates'>Meet Laura</Button>
                  </ButtonContainer>
                </FlexSpace>
              </FlexColumn>
            </Column>
            <Column />
            <Column />
          </Row>
        </Container>
      </Section>
      <CallToActionSection ctaImage={ctaImage} copy={false} />
    </Layout>
  );
};

export default Team;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    teamHero: file(relativePath: { eq: "team-hero.jpg" }) {
      ...fluidImage
    }
    joelKimmel: file(relativePath: { eq: "joel-kimmel.jpg" }) {
      ...fluidImage
    }
    judyKimmel: file(relativePath: { eq: "judy-kimmel.jpg" }) {
      ...fluidImage
    }
    angelaBeissel: file(relativePath: { eq: "angela-beissel.jpg" }) {
      ...fluidImage
    }
    charWilson: file(relativePath: { eq: "charlene-wilson.jpg" }) {
      ...fluidImage
    }
    amyCastoro: file(relativePath: { eq: "amy-castoro.jpg" }) {
      ...fluidImage
    }
    philHallstein: file(relativePath: { eq: "phil-hallstein.jpg" }) {
      ...fluidImage
    }
    lauraGates: file(relativePath: { eq: "laura-gates.jpg" }) {
      ...fluidImage
    }
    lindaCurtis: file(relativePath: { eq: "linda-curtis.jpg" }) {
      ...fluidImage
    }
    landonCarter: file(relativePath: { eq: "landon-carter.jpg" }) {
      ...fluidImage
    }
    whitneyGlassberg: file(relativePath: { eq: "whitney-glassberg.jpg" }) {
      ...fluidImage
    }
    lindaCurtis: file(relativePath: { eq: "linda-curtis.jpg" }) {
      ...fluidImage
    }
    ctaImage: file(relativePath: { eq: "values-cta-image.jpg" }) {
      ...fluidImage
    }
  }
`;
