import { css } from '@emotion/react';
import Section from '../Section';
import { Container, Grid, HeroContent, NarrowRow } from '../styles';
import EmailSignup from '../EmailSignup';
import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

const EmailSignupImage = styled(GatsbyImage)`
  grid-area: 1/1;
`;

const JoinTitle = styled.div`
  font-size: 1.5em;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 6px;

  @media (min-width: 768px) {
    font-size: 2.25em;
  }
`;

const JoinContent = styled.div`
  font-size: 1em;
  color: #ffffff;
  font-weight: 300;
  line-height: 1.7em;

  @media (min-width: 768px) {
    font-size: 1.5em;
  }
`;

interface EmailSignupSectionProps {
  emailImage?: IGatsbyImageData;
}

export const EmailSignupSection = ({
  emailImage,
}: EmailSignupSectionProps): JSX.Element => {
  return (
    <Section styles='background: #ffffff; padding-top: 0;'>
      <Container>
        <Grid
          css={css`
            overflow: hidden;
          `}
        >
          {emailImage && (
            <EmailSignupImage
              image={emailImage}
              alt="free copy of Life's Flow, Living in Language by Joel Kimmel"
            />
          )}
          <HeroContent
            css={css`
              background: black;
              opacity: 0.2;
            `}
          ></HeroContent>
          <HeroContent
            css={css`
              place-items: start;
            `}
          >
            <NarrowRow
              css={css`
                width: 100%;
              `}
            >
              <JoinTitle>Join Our Email List</JoinTitle>
              <JoinContent
                css={css`
                  display: none;
                  @media (min-width: 980px) {
                    display: block;
                  }
                `}
              >
                Sign up today to download your FREE copy of
                <br />
                <b>Life's Flow, Living in Language</b> by <b>Joel Kimmel</b>
                <br />
                and be the first to get notified about our new book.
              </JoinContent>
              <JoinContent
                css={css`
                  display: block;
                  @media (min-width: 980px) {
                    display: none;
                  }
                `}
              >
                Sign up today to download your FREE copy of
                <b>Life's Flow, Living in Language</b> by <b>Joel Kimmel</b>
                and be the first to get notified about our new book.
              </JoinContent>
              <EmailSignup />
            </NarrowRow>
          </HeroContent>
        </Grid>
      </Container>
    </Section>
  );
};

export default EmailSignupSection;
