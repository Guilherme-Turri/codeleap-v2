import { FormRegister } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'FormRegister',
  component: FormRegister,
  args: {
    username: 'user',
    usermail: 'mail@mail.com',
    userpassword: '123456',
  }
}

export const Temaplete = (args: any) => {
  return (
    <div>
      <FormRegister {...args} />
    </div>
  )
}