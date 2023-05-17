import { ComponentPropsWithoutRef } from 'react';
import { StyledATag } from './styles';

interface ButtonProps extends ComponentPropsWithoutRef<'a'> {
  children: string;
}

export const ATagButton = (props: ButtonProps): JSX.Element => {
  return <StyledATag {...props}>{props.children}</StyledATag>;
};
