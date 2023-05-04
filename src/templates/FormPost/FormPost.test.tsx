import { componentRender } from '../../render/componentRender'
import { FormPost } from '.'
import { screen } from '@testing-library/react'

describe('<FormPost/>', () => {
  it('should render on screen properly', () => {
    const propsFormPost = {
      handleCreatePost: jest.fn(),
      postTitle: {
        onChange: jest.fn(),
        value: '123',
      },
      postContent: {
        onChange: jest.fn(),
        value: '123',
      },
      isClosable: false
    }
    componentRender(<FormPost {...propsFormPost} />)
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Content Here')).toBeInTheDocument();
  })

  it('should render as create Post', () => {
    const propsFormPost = {
      handleCreatePost: jest.fn(),
      postTitle: {
        onChange: jest.fn(),
        value: '123',
      },
      postContent: {
        onChange: jest.fn(),
        value: '123',
      },
      isClosable: false
    }
    componentRender(<FormPost {...propsFormPost} />)
    expect(screen.getByText('Whats on your mind? Create a Post!')).toBeInTheDocument();
  })

  it('should render as edit Post', () => {
    const propsFormPost = {
      handleUpdatePost: jest.fn(),
      postTitle: {
        onChange: jest.fn(),
        value: '123',
      },
      postContent: {
        onChange: jest.fn(),
        value: '123',
      },
      isClosable: true
    }
    componentRender(<FormPost {...propsFormPost} />)
    expect(screen.getByText('Edit your post')).toBeInTheDocument();
    expect(screen.getByTestId('form')).toHaveStyleRule('border', 'none!important');
  })
})
