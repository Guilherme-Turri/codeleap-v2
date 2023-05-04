import { UpArrow } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'UpArrow',
  component: UpArrow,
}

const ajustDiv = {
  width: '200px',
  height: '200px'
}

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <UpArrow {...args} />
    </div>
  )
}