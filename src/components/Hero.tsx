import { ReactNode } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Grid = styled.div`
  display: grid;
  overflow: hidden;
`;

const StyledImage = styled(GatsbyImage)`
  grid-area: 1/1;
  height: 520px;
`;

interface HeroProps {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
  imgClassName?: string;
  heroStyles?: string;
  gridStyles?: string;
  children: ReactNode;
}

export const Hero = ({
  image,
  alt,
  className = '',
  heroStyles,
  gridStyles,
  imgClassName = '',
  children,
}: HeroProps): JSX.Element => {
  return (
    <section css={css`${heroStyles}`}>
      <Grid css={css`${gridStyles}`}>
        <StyledImage
          image={image}
          alt={alt}
          objectPosition='50%'
          className={className}
          imgClassName={imgClassName}
        />
        {children}
      </Grid>
    </section>
  );
};

export default Hero;
