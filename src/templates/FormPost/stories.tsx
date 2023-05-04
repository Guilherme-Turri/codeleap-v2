import { FormPost } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'FormPost',
  component: FormPost,
  args: {
    postTitle: 'Title',
    postContent: 'Content',
  }
}
const ajustDiv = {
  width: '800px',
  heigth: '300px'
}

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <FormPost {...args} />
    </div>

  )
}