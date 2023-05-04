import { Heading } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Heading',
  component: Heading,
  args: {
    children: 'This is a Heading',
  }
}

export const Temaplete = (args: any) => {
  return (
    <div>
      <Heading {...args} />
    </div>
  )
}