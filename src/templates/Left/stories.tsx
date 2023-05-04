import { Left } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Left',
  component: Left,
}

export const Temaplete = (args: any) => {
  return (
    <Left {...args} />
  )
}