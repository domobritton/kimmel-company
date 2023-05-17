import { css } from '@emotion/react';
import { ATagButton } from '../Button';
import Section from '../Section';
import { Column, Container, Flex } from '../styles';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface BookSectionProps {
  bookImage?: IGatsbyImageData;
  copy: JSX.Element;
  reverse?: boolean;
  title?: JSX.Element;
}

export const BookSection = ({
  bookImage,
  copy,
  reverse,
  title,
}: BookSectionProps): JSX.Element => {
  return (
    <Section styles='background: #ffffff'>
      <Container>
        <Flex>
          <Column
            css={css`
              order: 2;
              display: flex;
              flex-direction: column;
              align-items: center;

              @media (min-width: 980px) {
                order: 1;
                ${reverse && `order: 2;`}
              }
            `}
          >
            {title}
            {copy}
            <ATagButton
              href='https://www.amazon.com/Self-Vast-World-Beyond-Words/dp/0999832506/ref=sr_1_1?s=books&ie=UTF8&qid=1536446605&sr=1-1&keywords=self+joel+b+kimmel'
              target='_blank'
            >
              Buy Now
            </ATagButton>
          </Column>
          <Column
            css={css`
              order: 1;
              margin-bottom: 24px;

              @media (min-width: 980px) {
                order: 2;
                ${reverse && `order: 1;`}
                margin-bottom: 0px;
              }

              & > .book-image {
                height: 100%;
              }
            `}
          >
            {bookImage && (
              <GatsbyImage
                image={bookImage}
                alt='Self - Book by Joel B Kimmel'
                className='book-image'
              />
            )}
          </Column>
        </Flex>
      </Container>
    </Section>
  );
};

export default BookSection;
