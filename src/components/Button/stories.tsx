import { Button } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Button',
  component: Button,
  args: {
    children: 'Button',
  }
}
const ajustDiv = {
  width: '200px',
  height: '50px'
}

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <Button {...args} />
    </div>
  )
}