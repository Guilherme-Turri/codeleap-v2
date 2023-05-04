/* eslint-disable testing-library/no-unnecessary-act */
import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { Input } from '.'
import { componentRender } from '../../render/componentRender'

describe('<Input />', () => {
  it('should render on screen', () => {
    const mockValues = {
      type: 'Email',
      name: 'Email',
      onChange: jest.fn(),
      error: '',
      value: 'email'
    }
    const { container } = componentRender(<Input {...mockValues} />)
    expect(screen.getByTestId('Input')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render on screen whith error message', () => {
    const mockValues = {
      type: 'text',
      name: 'Email',
      onChange: jest.fn(),
      error: 'Please fill in a valid email.',
      value: '',
    }
    componentRender(<Input {...mockValues} />)
    const input = screen.getByTestId('Input');
    act(() => {
      userEvent.type(input, 'user@');
      input.blur();

    });
    const errorMessage = screen.getByText('Please fill in a valid email.');
    expect(errorMessage).toBeInTheDocument();
  })
})