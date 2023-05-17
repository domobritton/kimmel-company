import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

const PageLayout = styled.div`
  min-height: 100vh;
`;

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <main>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            font-family: Open Sans;
            color: #3a3a3a;
          }
          p {
            margin-top: 0;
            line-height: 1.5em;
            font-weight: 400;
            font-size: 1em;

            @media (min-width: 768px) {
              font-size: 1.25em;
            }
          }
        `}
      />
      <Header />
      <PageLayout>{children}</PageLayout>
      <Footer />
    </main>
  );
};

export default Layout;
