import { componentRender } from '../../render/componentRender'
import { LinkButton } from '.'
import { screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';

describe('<LinkButton/>', () => {
  it('should render on screen with small size', () => {
    componentRender(
      <Router><LinkButton size="small" href='/' text='back'></LinkButton></Router>)
    const link = screen.getByRole('link');
    expect(link).toHaveStyle('width: 20%');

  })
  it('should render on screen with medium size', () => {
    componentRender(
      <Router><LinkButton size="medium" href='/' text='back'></LinkButton></Router>)
    const link = screen.getByRole('link');
    expect(link).toHaveStyle('width: 50%');

  })
  it('should render on screen with large size', () => {
    componentRender(
      <Router><LinkButton size="large" href='/' text='back'></LinkButton></Router>)
    const link = screen.getByRole('link');
    expect(link).toHaveStyle('width: 70%');
  })
})