import { Loading } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Loading',
  component: Loading,
}

const ajustDiv = {
  width: '50px',
  height: '50px'
}

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <Loading {...args} />
    </div>
  )
}