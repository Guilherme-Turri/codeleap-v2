import { UpArrow } from '../../UI/UpArrow'
import { useWidth } from '../../hooks/useWidth';
import * as Styled from './styles'

export const ScrollToTop = () => {
  const width = useWidth();
  const isMobile = width <= 850;

  return (
    <Styled.Container isMobile={isMobile} data-testid='scroll' onClick={() => window.scrollTo(0, 0)}>
      <UpArrow></UpArrow>
    </Styled.Container>
  )
}