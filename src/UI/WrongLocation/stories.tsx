import { WrongLocation } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'WrongLocation',
  component: WrongLocation,
}

const ajustDiv = {
  width: '200px',
  height: '200px'
}

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <WrongLocation {...args} />
    </div>
  )
}