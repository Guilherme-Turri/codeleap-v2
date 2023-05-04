import React from "react";
import { ModalUpdatePost } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'ModalUpdatePost',
  component: ModalUpdatePost,
  args: {
    message: 'This a message to render',
    postTitle: {
      value: '',
      error: ''
    },
    postContent: {
      value: '',
      error: ''
    },
  }
}

export const Temaplete = (args: any) => {
  return (
    <ModalUpdatePost {...args} />
  )
}
Temaplete.args = {
  message: ''
}
export const Template2 = (args: any) => {
  return (
    <ModalUpdatePost {...args} />
  )
}