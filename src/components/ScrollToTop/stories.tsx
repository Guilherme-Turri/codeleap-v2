import React from "react";
import { ScrollToTop } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'ScrollToTop',
  component: ScrollToTop,
}

const ajustDiv = {
  width: '50px',
  height: '50px'
}

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <ScrollToTop {...args} />
    </div>
  )
}