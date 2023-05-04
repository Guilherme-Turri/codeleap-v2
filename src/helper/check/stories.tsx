import { Check } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Check',
  component: Check,

}
const ajustDiv = {
  width: '50px',
  height: '50px'
}

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <Check {...args} />
    </div>
  )
}