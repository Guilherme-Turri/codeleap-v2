import { AuthLogo } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'AuthLogo',
  component: AuthLogo,

}
const ajustDiv = {
  width: '50px',
  height: '50px'
}


export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <AuthLogo {...args} />
    </div>
  )
}