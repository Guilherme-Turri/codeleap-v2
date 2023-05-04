import { Delete } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Delete',
  component: Delete,
}

const ajustDiv = {
  width: '200px',
  height: '200px'
}
export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <Delete {...args} />
    </div>
  )
}