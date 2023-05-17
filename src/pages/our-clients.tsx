import { PageProps, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { IGatsbyImageData, StaticImage, getImage } from 'gatsby-plugin-image';
import Hero from '../components/Hero';
import { Container, Grid, HeroContent, HeroTitle } from '../components/styles';
import styled from '@emotion/styled';
import Section from '../components/Section';
import { css } from '@emotion/react';
import CallToActionSection from '../components/Home/CallToActionSection';

const LogoGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-template-rows: repeat(auto-fit, 1fr);
  column-gap: 48px;
  row-gap: 100px;
`;

const ATag = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

interface ImageData {
  ourClientsHero: IGatsbyImageData;
  ctaImage: IGatsbyImageData;
}

interface Props extends PageProps {
  data: ImageData;
}

export const OurClients = ({ data }: Props): JSX.Element => {
  const image = getImage(data.ourClientsHero);
  const ctaImage = getImage(data.ctaImage);
  return (
    <Layout>
      {image && (
        <Hero image={image} alt='San Francisco skyline'>
          <HeroContent>
            <Container>
              <HeroTitle>Our Clients</HeroTitle>
            </Container>
          </HeroContent>
        </Hero>
      )}
      <Section
        styles={`
          background: #626366;
        `}
      >
        <Container>
          <p
            css={css`
              color: #ffffff;
            `}
          >
            Over the years, we have had the privilege of working with a vast
            range of individuals, families, nonprofits, and corporations. Our
            client's growth and success - no matter the area of focus -
            inspires, contributes and enhances our passion to continue to
            explore human interaction, authentic communication, and dynamics of
            “being” and “doing” in life.
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <LogoGrid>
            <ATag
              href='https://www.dupont.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/dupont.png'
                alt='dupont'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>
            <ATag
              href='https://www.schwab.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/schwab.png'
                alt='charles schwab'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>
            <ATag
              href='https://www.amgen.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/amgen.png'
                alt='amgen'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>
            <ATag
              href='https://www.supercuts.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/supercuts.png'
                alt='supercuts'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>

            <ATag
              href='https://www.ceridian.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/ceridian.png'
                alt='ceridian'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>
            <ATag
              href='https://ascent.usbank.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/ascent.png'
                alt='ascent'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>
            <ATag
              href='https://www.intuit.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/intuit.png'
                alt='intuit'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>
            <ATag
              href='https://www.officedepot.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/officemax.png'
                alt='officemax'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>

            <ATag
              href='https://www.shell.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/shell.png'
                alt='shell'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>
            <ATag
              href='https://www.itron.com/na'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/itron.png'
                alt='itron'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>
            <ATag
              href='https://www.mattamyhomes.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/mattamy.jpg'
                alt='mattamy'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>
            <ATag
              href='https://www.hogislandoysters.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/hogisland.jpg'
                alt='hog island oyster company'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>

            <ATag
              href='https://www.peacealliance.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/peacealliance.png'
                alt='peacealliance'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>
            <ATag
              href='https://www.hightoweradvisors.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/hightower.png'
                alt='hightower'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>
            <ATag
              href='https://www.thewilliamsgroup.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/williamsgroup.jpg'
                alt='williamsgroup'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>
            <ATag
              href='https://www.cap.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/cap.jpg'
                alt='college of american pathologists'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>

            <ATag
              href='https://www.pikeplacefish.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/pikeplace.png'
                alt='pike place fish market'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>
            <ATag
              href='https://en.wikipedia.org/wiki/Applera'
              target='_blank'
              rel='noopener noreferrer'
            >
              <StaticImage
                src='../images/applera.jpg'
                alt='applera'
                placeholder='blurred'
                objectFit='contain'
                css={css`
                  height: 80px;
                  filter: grayscale(100%);
                `}
              />
            </ATag>
          </LogoGrid>
        </Container>
      </Section>
      <CallToActionSection ctaImage={ctaImage} copy={false} />
    </Layout>
  );
};

export default OurClients;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export const pageQuery = graphql`
  query {
    ourClientsHero: file(relativePath: { eq: "our-clients.jpg" }) {
      ...fluidImage
    }
    ctaImage: file(relativePath: { eq: "goldengate.jpg" }) {
      ...fluidImage
    }
  }
`;
