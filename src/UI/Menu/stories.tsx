import { Menu } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Menu',
  component: Menu,
}

const ajustDiv = {
  width: '200px',
  height: '200px'
}

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <Menu {...args} />
    </div>
  )
}