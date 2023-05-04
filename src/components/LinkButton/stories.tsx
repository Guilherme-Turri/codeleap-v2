import { LinkButton } from "."
import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'LinkButton',
  component: LinkButton,
  args: {
    text: 'Back',
    href: '/'
  }
}

export const Template = (args: any) => {
  return (
    <Router>
      <div>
        <LinkButton {...args} />
      </div>
    </Router>
  )
}