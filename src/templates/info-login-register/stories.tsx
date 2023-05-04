import { Info } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Info',
  component: Info,
  args: {
    error: 'ErrorMessage',
    message: 'Message'
  }
}
const ajustDiv = {
  width: '600px',
  height: '100px'
}

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <Info {...args} />
    </div>
  )
}