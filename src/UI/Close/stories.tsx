import { Close } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Close',
  component: Close,
}

const ajustDiv = {
  width: '200px',
  height: '200px'
}

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <Close {...args} />
    </div>
  )
}