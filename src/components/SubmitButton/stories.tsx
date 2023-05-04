import { SubmitButton } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'SubmitButton',
  component: SubmitButton,
  args: {
    children: 'Button',
    usermail: 'Guilherme',
    userpassword: 'pass'
  },
}
const ajustDiv = {
  width: '400px'
}

const handleClick = (event: any) => {
  event.preventDefault();
};

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <SubmitButton {...args} onSubmit={handleClick} />
    </div>
  )
}