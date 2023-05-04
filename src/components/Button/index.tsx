import * as Styled from './styles'

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <Styled.Button>{children}</Styled.Button>
  )
}