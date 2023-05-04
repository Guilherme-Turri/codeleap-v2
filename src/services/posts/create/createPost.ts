import {IRequest, IUser} from '../../../types/types'
import { POST_CREATE_API } from "../../../services/api";
 
type CreateJson ={
  status: string,
  msg?: string,
  error?:string
} 
export const createPost  = async (postTitle:string, postValue:string, request:IRequest<CreateJson>, user:IUser) =>{
  const{name, _id, avatarPic} = user;
  const token = localStorage.getItem('token')
    const {url, options} = POST_CREATE_API(token!, postTitle, postValue, name, _id, avatarPic!)
    const {response, json} = await request(url, options)
    if(response&&json){
    return {response, json}
     }
    else return ;
 } 