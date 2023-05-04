import { Add } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Add',
  component: Add,
}

const ajustDiv = {
  width: '200px',
  height: '200px'
}
export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <Add {...args} />
    </div>
  )
}