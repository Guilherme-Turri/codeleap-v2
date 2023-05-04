import { POST_GET_API } from "../../api"
import {IRequest, IPost} from '../../../types/types'

export  const fetchPost  = async (request:IRequest<IPost[]>) =>{
  const {url, options} = POST_GET_API()
  const {response, json} = await request(url, options)
  if(response&&json){
  return {response, json}
   }
  else{
  return  
}
}