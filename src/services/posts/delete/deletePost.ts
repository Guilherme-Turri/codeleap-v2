import {IRequest} from '../../../types/types'
import { POST_DELETE_API } from "../../../services/api";

 type DeleteJson ={
  msg: string,
  error?:string
}
export const deletePost  = async (id:string, request:IRequest<DeleteJson>) =>{
  const token = localStorage.getItem('token')
    const {url, options} = POST_DELETE_API(token!, id)
    const {response, json} = await request(url, options)
    if(response&&json){
    return {response, json}
     }
    else return;
 }
 