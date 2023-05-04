import { Input } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default{
  name:'TextComponent',
  component: Input,
  args :{
    name:'Email',
    type: 'text',
    value:'email@email.com',
    error: ''
   }
}
const ajustDiv ={
  width: '400px'
}

export const Temaplete = (args:any) => {
  return(
    <div style={ajustDiv}>
      <Input {...args}/>
    </div>
  )
}