import * as Styled from './styles'

export interface SubmitProps {
  children: React.ReactNode,
  usermail?: string,
  userpassword?: string,
  postTitle?: string,
  postContent?: string
  error?: string,
  name?: string,
}

export const SubmitButton = ({ children, usermail, userpassword, error, name, postTitle, postContent }: SubmitProps) => {
  const values = [usermail, userpassword, name, postTitle, postContent].every((e) => (e ?? 'a').length > 0);
  const enableColor = [values, error === '',].every((e) => e === true)
  return (
    <Styled.Container enableColor={enableColor}>
      {children}
    </Styled.Container>
  )
} 