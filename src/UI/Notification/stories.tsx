import { Notification } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Notification',
  component: Notification,
}

const ajustDiv = {
  width: '200px',
  height: '200px'
}

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <Notification {...args} />
    </div>
  )
}