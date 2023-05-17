import { css } from '@emotion/react';
import Section from '../Section';
import { Container, NarrowRow } from '../styles';
import styled from '@emotion/styled';

const TopText = styled.div`
  text-align: center;
  font-size: 1em;
  color: #3a3a3a;
  position: relative;
  display: none;

  > b {
    color: #ffffff;
    font-size: 200%;
  }

  @media (min-width: 600px) {
    display: block;
  }

  @media (min-width: 980px) {
    font-size: 1.5em;
  }
`;

const MiddleText = styled(TopText)`
  margin-left: 55px;
  display: none;

  @media (min-width: 600px) {
    display: block;
  }

  @media (min-width: 980px) {
    margin-left: 110px;
  }
`;

const BottomText = styled(TopText)`
  margin-left: 90px;
  display: none;

  @media (min-width: 600px) {
    display: block;
  }

  @media (min-width: 980px) {
    margin-left: 150px;
  }
`;

const Author = styled.div`
  padding: 24px 0;
  font-size: 14px;
  text-align: right;
  color: #ffffff;
  position: relative;
  font-weight: 700;

  @media (min-width: 600px) {
    color: #3a3a3a;
    right: 10vw;
  }
`;

const BottomInspireBox = styled.div`
  border-top: 2px solid #ffffff;
  padding-top: 20px;
  text-align: center;
`;

const BottomInspireText = styled.p`
  font-size: 24px;
  color: #ffffff;
`;

export const MissionSection = () => {
  return (
    <Section styles='background: #f1f1f1'>
      <Container>
        <NarrowRow
          css={css`
            background: #868f95;
            margin-bottom: 48px;
          `}
        >
          <TopText
            css={css`
              margin-left: -160px;

              @media (min-width: 980px) {
                margin-left: -220px;
              }
            `}
          >
            "One can choose to <b>Create</b>,
          </TopText>
          <MiddleText>
            <b>Inspire</b> others,
          </MiddleText>
          <BottomText>
            and <b>Celebrate</b> the world."
          </BottomText>
          <BottomInspireText
            css={css`
              margin: 0;

              @media (min-width: 600px) {
                display: none;
              }
            `}
          >
            "One can choose to <b>Create</b>, <b>Inspire</b> others, and{' '}
            <b>Celebrate</b> the world."
          </BottomInspireText>
          <Author>- Joel Kimmel</Author>
          <BottomInspireBox>
            <BottomInspireText>
              With the innovative technologies of “living in language”, Identity
              and Somatics, and with the assistance of other more traditional
              assessment tools, we work with our clients toward a new, inspired
              vision.
            </BottomInspireText>
          </BottomInspireBox>
        </NarrowRow>
        <NarrowRow
          css={css`
            background: #e1e1e1;
          `}
        >
          <p>
            <b>We are a high-performance consulting group </b>
            dedicated to inspiring individuals, teams, and companies to reach
            their highest potential. In much of life, we believe that a critical
            performance driver is being overlooked: human effectiveness, a
            quality which is a direct product of the efficiency of all
            interactions. To amplify this quality, we focus on Ontology, the
            science of who people are “being” rather than what they are “doing”.
          </p>
        </NarrowRow>
      </Container>
    </Section>
  );
};

export default MissionSection;
