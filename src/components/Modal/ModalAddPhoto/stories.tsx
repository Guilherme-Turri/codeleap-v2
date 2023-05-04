import React from "react";
import { ModalAddPhoto } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'ModalAddPhoto',
  component: ModalAddPhoto,
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
      <ModalAddPhoto {...args} />
    </div>
  )
}
Temaplete.args = {
  message: ''
}
export const Template2 = (args: any) => {
  return (
    <div style={ajustDiv}>
      <ModalAddPhoto {...args} />
    </div>
  )
}