import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

const LinkContainer = styled.div`
  margin-bottom: 24px;
`;

const BackLink = styled(Link)`
  color: #3a3a3a;
  text-decoration: none;
`;

const Back = styled.span`
  margin-left: 12px;
`;

const Name = styled.h1`
  font-weight: 300;
  font-size: 2em;
  margin: 0 0 8px;

  @media (min-width: 768px) {
    font-size: 2.5em;
  }
`;

const Title = styled.h2`
  font-weight: 300;
  font-size: 1.5em;
  margin: 0 0 24px;
`;

const FlexUL = styled.ul`
  display: flex;
  gap: 12px;
  list-style-type: none;
  padding: 0;
`;

const SocialLink = styled.a`
  font-size: 32px;
`;

type Paragraph = {
  id: number;
  copy: string;
  link?: {
    href: string;
    text: string;
  };
};

interface TeamMemberProps {
  imageData: IGatsbyImageData | undefined;
  imageAlt: string;
  name: string;
  title?: string;
  paragraphs: Paragraph[];
  email?: string;
  linkedIn?: string;
  facebook?: string;
}

export const TeamMember = ({
  imageData,
  imageAlt,
  name,
  title,
  paragraphs,
  email,
  linkedIn,
  facebook,
}: TeamMemberProps): JSX.Element => {
  const image = imageData && getImage(imageData);
  return (
    <div>
      <LinkContainer>
        <BackLink to='/team'>
          <FontAwesomeIcon icon={faChevronLeft} />
          <Back>Back to The Team</Back>
        </BackLink>
      </LinkContainer>

      <div>
        {image && (
          <GatsbyImage
            image={image}
            alt={imageAlt}
            css={css`
              margin: 0 0 24px;
              max-width: 350px;

              @media (min-width: 768px) {
                margin: 0 24px 8px 0;
                width: 250px;
                height: 250px;
                display: inline;
                float: left;
              }
            `}
          />
        )}
        <Name>{name}</Name>
        {title && <Title>{title}</Title>}
        {paragraphs.map(({ id, copy, link }) => {
          return (
            <Fragment>
              <p key={id}>
                {copy}
                {link && (
                  <span>
                    <a
                      href={link.href}
                      target='_blank'
                      css={css`
                        text-decoration: none;
                        color: #28678b;
                      `}
                    >
                      {link.text}
                    </a>
                  </span>
                )}
              </p>
            </Fragment>
          );
        })}
        <p
          css={css`
            font-family: Bilbo, cursive;
            color: #28678b;
            font-size: 2.5em;
            margin: 0;
          `}
        >
          Let's Connect!
        </p>
        <FlexUL>
          {email && (
            <li>
              <SocialLink href={`mailto:${email}`} title='Email'>
                <FontAwesomeIcon icon={faEnvelope} color='#28678b' />
              </SocialLink>
            </li>
          )}
          {facebook && (
            <li>
              <SocialLink
                href={facebook}
                title='Follow on Facebook'
                target='_blank'
              >
                <FontAwesomeIcon icon={faFacebook} color='#3B5997' />
              </SocialLink>
            </li>
          )}
          {linkedIn && (
            <li>
              <SocialLink
                href={linkedIn}
                title='Follow on LinkedIn'
                target='_blank'
              >
                <FontAwesomeIcon icon={faLinkedin} color='#037AB6' />
              </SocialLink>
            </li>
          )}
        </FlexUL>
      </div>
    </div>
  );
};

export default TeamMember;
