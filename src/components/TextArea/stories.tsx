import { TextArea } from "."

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'TextArea',
  component: TextArea,
}

export const Template = (args: any) => {
  return (
    <div>
      <TextArea {...args} />
    </div>
  )
}