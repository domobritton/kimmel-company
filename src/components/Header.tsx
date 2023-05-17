import { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Hamburger from 'hamburger-react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container } from './styles';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from '@emotion/react';

const StyledHeader = styled.header`
  position: fixed;
  line-height: 23px;
  font-weight: 500;
  top: 0;
  background-color: #fff;
  width: 100%;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  z-index: 99999;
`;

const HeaderContainer = styled(Container)`
  text-align: left;
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  padding: 25px 0;
  width: 120px;
`;

const TopNavigation = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  float: right;
  font-weight: 600;

  @media (min-width: 980px) {
    padding: 0;
    display: flex;
    align-items: center;
  }
`;

const Nav = styled.nav`
  float: left;
`;

const TopMenu = styled.ul`
  margin: 0;
  float: left;
  display: none;

  @media (min-width: 980px) {
    display: flex;
    padding: 0;
  }
`;

const ListItem = styled.li`
  list-style-type: none;
  border-bottom: 1px solid #f1f1f1;

  @media (min-width: 980px) {
    border: none;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 16px 0;
  font-size: 14px;
  word-wrap: break-word;
  position: relative;
  line-height: 1em;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  &[aria-current='page'] {
    color: #2ea3f2;
  }

  @media (min-width: 980px) {
    display: inline-block;
    padding-right: 22px;
  }
`;

const LinkSpan = styled.span``;

const Wrapper = styled.div`
  position: relative;
`;

const SubMenu = styled.ul<{ open: boolean }>`
  border-top: 3px solid transparent;
  padding-left: 0px;

  @media (min-width: 980px) {
    position: absolute;
    top: 68px;
    left: 0;
    padding: 20px 0;
    z-index: 9999;
    background: #fff;
    visibility: hidden;
    opacity: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
    text-align: left;
  
    ${({ open }) =>
      open &&
      `
    opacity: 1;
    visibility: visible;
  }
`}
`;

const SubMenuLink = styled(Link)`
  margin: 0;
  display: block;
  padding: 16px 0 16px 20px;
  font-size: 14px;
  width: 200px;
  text-decoration: none;
  line-height: 1em;
  color: rgba(0, 0, 0, 0.6);

  &[aria-current='page'] {
    color: #2ea3f2;
  }

  &:hover {
    background: #e1e1e1;
  }

  @media (min-width: 980px) {
    display: block;
    padding: 16px 24px;
  }
`;

const MobileNavMenu = styled.div`
  float: right;

  @media (min-width: 980px) {
    display: none;
  }
`;

const MobileMenu = styled.ul<{ open: boolean }>`
  position: absolute;
  left: 5%;
  right: 5%;
  margin: 0 auto;
  top: 87px;
  padding: 5% 5% 0;
  background: #fff;
  width: 80%;
  visibility: hidden;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  display: none;
  z-index: 9999;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  ${({ open }) => open && `display: block; opacity: 1; visibility: visible;`}
`;

const Menu = ({
  open,
  setOpen,
  setMobileMenuOpen,
}: {
  open: boolean;
  setOpen?: (bool: boolean) => void;
  setMobileMenuOpen?: (bool: boolean) => void;
}): JSX.Element => {
  const handleMenuClose = () => {
    setMobileMenuOpen?.(false);
  };

  return (
    <Fragment>
      <ListItem onClick={handleMenuClose}>
        <StyledLink to='/'>
          <LinkSpan>Home</LinkSpan>
        </StyledLink>
      </ListItem>
      <ListItem onClick={handleMenuClose}>
        <StyledLink to='/our-clients'>
          <LinkSpan>Our Clients</LinkSpan>
        </StyledLink>
      </ListItem>
      <ListItem onClick={handleMenuClose}>
        <StyledLink to='/core-values'>
          <LinkSpan>Our Core Values</LinkSpan>
        </StyledLink>
      </ListItem>
      <Wrapper
        onMouseEnter={() => setOpen?.(true)}
        onMouseLeave={() => setOpen?.(false)}
      >
        <ListItem onClick={handleMenuClose}>
          <StyledLink
            to='/services'
            css={css`
              @media (min-width: 980px) {
                padding-right: 10px;
              }
            `}
          >
            <LinkSpan>Services</LinkSpan>
          </StyledLink>
          <FontAwesomeIcon
            css={css`
              display: none;

              @media (min-width: 980px) {
                display: inline-block;
              }
            `}
            icon={faChevronDown}
            onClick={() => setOpen?.(!open)}
          />
        </ListItem>
        <SubMenu open={open}>
          <ListItem
            onClick={handleMenuClose}
            css={css`
              @media (min-width: 980px) {
                border-bottom: 1px solid #f1f1f1;
              }
            `}
          >
            <SubMenuLink to='/coaching'>
              <LinkSpan>Coaching</LinkSpan>
            </SubMenuLink>
          </ListItem>
          <ListItem onClick={handleMenuClose}>
            <SubMenuLink to='/courses'>
              <LinkSpan>Courses</LinkSpan>
            </SubMenuLink>
          </ListItem>
        </SubMenu>
      </Wrapper>
      <ListItem
        onClick={handleMenuClose}
        css={css`
          @media (min-width: 980px) {
            margin-left: 16px;
          }
        `}
      >
        <StyledLink to='/team'>
          <LinkSpan>Meet The Team</LinkSpan>
        </StyledLink>
      </ListItem>
      <ListItem onClick={handleMenuClose}>
        <StyledLink
          to='/contact'
          css={css`
            @media (min-width: 980px) {
              padding-right: 0;
            }
          `}
        >
          <LinkSpan>Contact Us</LinkSpan>
        </StyledLink>
      </ListItem>
    </Fragment>
  );
};

export const Header = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <StyledHeader id='main-header' data-height-onload='66'>
      <HeaderContainer>
        <LogoContainer>
          <Link to='/'>
            <StaticImage
              src='../images/kimmel-and-company.png'
              alt='Kimmel and Company'
              placeholder='blurred'
              layout='fixed'
              width={119}
              height={34}
            />
          </Link>
        </LogoContainer>
        <TopNavigation>
          <Nav>
            <TopMenu>
              <Menu open={open} setOpen={setOpen} />
            </TopMenu>
          </Nav>
          <MobileNavMenu>
            <Hamburger
              toggled={mobileMenuOpen}
              toggle={setMobileMenuOpen}
              size={20}
              direction='left'
              duration={0.8}
              color='#3a3a3a'
            />
            <MobileMenu open={mobileMenuOpen}>
              <Menu open={true} setMobileMenuOpen={setMobileMenuOpen} />
            </MobileMenu>
          </MobileNavMenu>
        </TopNavigation>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
