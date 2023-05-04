import { FormLogin } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'FormLogin',
  component: FormLogin,
  args: {
    usermail: 'Guilherme',
    userpassword: 'password',
  }
}

export const Temaplete = (args: any) => {
  return (
    <div>
      <FormLogin {...args} />
    </div>
  )
}