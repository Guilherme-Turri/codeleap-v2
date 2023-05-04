import { DoorOpened } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'DoorOpened',
  component: DoorOpened,
}

const ajustDiv = {
  width: '200px',
  height: '200px'
}

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <DoorOpened {...args} />
    </div>
  )
}