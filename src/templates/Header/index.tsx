import React from 'react'
import * as Styled from './styles'
import { Logo } from '../../UI/Logo'
import { Menu } from '../../UI/Menu'

import { setUnloggedUser } from '../../context/user/Logout/setUnloggedUser'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TextComponent } from '../../components/TextComponent'
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store'
import { useWidth } from '../../hooks/useWidth'


export const Header = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const [clicked, setClicked] = React.useState<boolean>(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const width = useWidth();
  const isMobile = width <= 850;

  const handleLogout = () => {
    setUnloggedUser(dispatch, navigate);
  }
  return (
    <Styled.Container>
      <Styled.Left>
        <Styled.Img isMobile={isMobile}>
          <Logo></Logo>
        </Styled.Img>
        <TextComponent>Welcome, {user?.name} </TextComponent>
      </Styled.Left>
      <Styled.Right >
        <Styled.Blur data-testid='blur' isMobile={isMobile} clicked={clicked}>
          <Styled.Actions isMobile={isMobile} data-testid='profile' onClick={() => setClicked(!clicked)}>
            <Link to={`/user/${user?._id}`}>Profile</Link>
          </Styled.Actions>
          <Styled.Actions isMobile={isMobile} data-testid='home' onClick={() => setClicked(!clicked)}>
            <Link to={`/home`}>Home</Link>
          </Styled.Actions>
          <Styled.Actions isMobile={isMobile} data-testid='logout' onClick={handleLogout} >
            <TextComponent >Logout </TextComponent>
          </Styled.Actions>
        </Styled.Blur>
        <Styled.Menu data-testid='menu' isMobile={isMobile} clicked={clicked} onClick={() => setClicked(!clicked)}>
          <Menu></Menu>
        </Styled.Menu>

      </Styled.Right>
    </Styled.Container>
  )
}