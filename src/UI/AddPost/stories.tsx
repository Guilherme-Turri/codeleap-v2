import { AddPost } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'AddPost',
  component: AddPost,
}

const ajustDiv = {
  width: '200px',
  height: '200px'
}

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <AddPost {...args} />
    </div>
  )
}