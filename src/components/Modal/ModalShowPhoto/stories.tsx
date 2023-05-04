import React from "react";
import { ModalShowPhoto } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'ModalShowPhoto',
  component: ModalShowPhoto,
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
      <ModalShowPhoto {...args} />
    </div>
  )
}
Temaplete.args = {
  message: ''
}
export const Template2 = (args: any) => {
  return (
    <div style={ajustDiv}>
      <ModalShowPhoto {...args} />
    </div>
  )
}