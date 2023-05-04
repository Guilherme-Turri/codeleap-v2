import { Pencil } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Pencil',
  component: Pencil,
}

const ajustDiv = {
  width: '200px',
  height: '200px'
}

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <Pencil {...args} />
    </div>
  )
}