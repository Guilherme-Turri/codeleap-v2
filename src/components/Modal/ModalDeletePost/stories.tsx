import React from "react";
import { ModalDeletePost } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'ModalDeletePost',
  component: ModalDeletePost,
  args: {
    message: 'This a message to render'
  }

}

const ajustDiv = {
  width: '600px',
  height: '300px'
}

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <ModalDeletePost {...args} />
    </div>
  )
}
Temaplete.args = {
  message: ''
}
export const Template2 = (args: any) => {
  return (
    <div style={ajustDiv}>
      <ModalDeletePost {...args} />
    </div>
  )
}