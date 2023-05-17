import { css } from '@emotion/react';
import Section from '../Section';
import { Container, Flex } from '../styles';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';

const quotes = css`
  width: 100%;
  padding: 20px;

  @media (min-width: 980px) {
    width: 33.333%;
  }
`;

const QuoteLeft = styled.div`
  background: #28678b;
  ${quotes}
`;

const QuoteCenter = styled.div`
  background: #2b3e4c;
  ${quotes}
`;

const QuoteRight = styled.div`
  background: #4e6a65;
  ${quotes}
`;

const FlexRow = styled(Flex)`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

const Testimonial = styled.p`
  font-size: 1.125em;
  color: #ffffff;
  line-height: 1.4em;
  text-align: center;
`;

const Name = styled.div`
  font-size: 1.125em;
  color: #ffffff;
  line-height: 1;
  text-align: center;
  margin-top: 40px;
  font-weight: 700;
`;

const Title = styled.div`
  font-size: 1.125em;
  color: #ffffff;
  line-height: 1;
  text-align: center;
`;

export const TestimonialsSection = () => {
  return (
    <Section styles='background: #f1f1f1'>
      <Container>
        <Flex>
          <QuoteLeft>
            <FlexRow>
              <StaticImage
                src='../../images/quote.png'
                alt='quote'
                placeholder='blurred'
                width={60}
              />
            </FlexRow>
            <Testimonial>
              Working with Joel has helped me take my intentions and goals from
              concept to reality. Joel's coaching keeps me focused while
              remaining human and open to possibility. Joel is one of the most
              effective listeners I know. I believe his ability to listen to the
              tone as well as the content, without judgment, is a big part of
              what makes his coaching so valuable. I look forward to our
              sessions each week, because I know it represents another step
              closer to my goals.
            </Testimonial>
            <Name>George Woods Baker</Name>
            <Title>Chairman and CEO, Intrepidus</Title>
          </QuoteLeft>
          <QuoteCenter>
            <FlexRow>
              <StaticImage
                src='../../images/quote.png'
                alt='quote'
                placeholder='blurred'
                width={60}
              />
            </FlexRow>
            <Testimonial>
              I took the course in October and since then amazing and truly
              miraculous things have occurred in my life… Suffice to say this
              course and the wonderful tools provided have completely altered my
              perception of what is possible in my life and has made me a far
              better coach.
            </Testimonial>
            <Name>Sandy Vilas</Name>
            <Title>CEO, MCC, CoachU.com</Title>
          </QuoteCenter>
          <QuoteRight>
            <FlexRow>
              <StaticImage
                src='../../images/quote.png'
                alt='quote'
                placeholder='blurred'
                width={60}
              />
            </FlexRow>
            <Testimonial>
              …Probably the most powerful part of the weekend was the work we
              did on “being in the moment”. I continue to find it so valuable to
              be able to step outside my thoughts, emotions, and judgments,
              etc., of myself and others – to be the observer – and just be
              present to what is happening before me.
            </Testimonial>
            <Testimonial>
              I would do the weekend again in a heartbeat.
            </Testimonial>
            <Name>Linda Leyerle</Name>
            <Title>Owner, Supercuts Franchisee</Title>
          </QuoteRight>
        </Flex>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
