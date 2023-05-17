import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const StyledFooter = styled.footer`
  background: #3a3a3a;
`;

const Row = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: auto;
  position: relative;
`;

const FooterDisclaimer = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1em;
  padding-top: 30px;
  color: #ffffff;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.h6`
  font-size: 16px;
  color: #ffffff;
`;

const SocialLink = styled.a`
  font-size: 32px;
`;

const FlexUL = styled.ul`
  display: flex;
  gap: 12px;
  list-style-type: none;
`;

const Developer = styled.p`
  font-size: 14px;
  padding-bottom: 24px;
  margin: 0;
  color: #ffffff;
`;

const DeveloperLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

export const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <Row>
        <FooterDisclaimer>
          Our site provides you the opportunity to opt-out of receiving
          communications by reading the unsubscribe instructions located at the
          bottom of any e-mail you receive from us at any time. We are committed
          to keeping your personal information confidential.
        </FooterDisclaimer>
      </Row>
      <Row>
        <FlexRow>
          <Copyright>
            © {new Date().getFullYear()} Kimmel &amp; Company
          </Copyright>
          <FlexUL>
            <li>
              <SocialLink
                href='https://www.facebook.com/kimmelandco/?hc_ref=ARTa7B1lwA8LJq_tHzLulOXihR_zkBK6LHuNMq41YN3T-HiBJpmAdtSNUbQ43xssoy4'
                title='Follow on Facebook'
                target='_blank'
              >
                <FontAwesomeIcon icon={faFacebook} color='#3B5997' />
              </SocialLink>
            </li>
            <li>
              <SocialLink
                href='https://www.linkedin.com/in/joel-kimmel-600a947/'
                title='Follow on LinkedIn'
                target='_blank'
              >
                <FontAwesomeIcon icon={faLinkedin} color='#037AB6' />
              </SocialLink>
            </li>
          </FlexUL>
        </FlexRow>
        <Developer>
          Created with ♡ by{' '}
          <DeveloperLink
            href='https://domadams.me/'
            target='_blank'
            rel='noopener'
          >
            Domonic Adams
          </DeveloperLink>
        </Developer>
      </Row>
    </StyledFooter>
  );
};

export default Footer;
