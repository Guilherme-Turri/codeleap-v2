import * as Styled from './styles'
import { WrongLocation } from '../../UI/WrongLocation'
import { TextComponent } from '../../components/TextComponent'
import { Heading } from '../../components/Heading'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { LinkButton } from '../../components/LinkButton'
import { useWidth } from '../../hooks/useWidth'
import { Helmet } from '../../helper/Helmet';


export const NotFound = () => {

  const width = useWidth();
  const isMobile = width <= 850;

  const { user } = useSelector((state: RootState) => state.user);
  return (
    <Styled.Container>
      <Helmet title='Not Found'></Helmet>
      <Styled.Wrapper data-testid='wrapper' isMobile={isMobile}>
        <Heading big={true} uppercase={true} as='h3'>Ooops</Heading>
        <Styled.Img>
          <WrongLocation />
        </Styled.Img>
        <TextComponent>404 - Page not Found.</TextComponent>
        <LinkButton size='medium' text='Back' href={user ? '/home' : '/'}></LinkButton>
      </Styled.Wrapper>
    </Styled.Container>
  )
}
