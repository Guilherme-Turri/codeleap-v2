import { ErrorMessage } from "./";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'TextComponent',
  component: ErrorMessage,
  args: {
    children: 'This is a error message',
  }
}

export const Temaplete = (args: any) => {
  return (
    <div>
      <ErrorMessage {...args} />
    </div>
  )
}