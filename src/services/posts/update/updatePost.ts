import {IRequest, IUser} from '../../../types/types'
import {POST_UPDATE_API } from "../../../services/api";
 
type updateJson ={
  status: string,
  msg: string,
  error:string
}

export const updatePost  = async (postTitle:string, postContent:string, request:IRequest<updateJson>, user:IUser, id:string) =>{
  const{name, _id} = user;
  const token = localStorage.getItem('token')
    const {url, options} = POST_UPDATE_API(token!, postTitle, postContent, name, _id, id)
    const {response, json} = await request(url, options)
    if(response && json){
    return {response, json}
     }
    else return
}