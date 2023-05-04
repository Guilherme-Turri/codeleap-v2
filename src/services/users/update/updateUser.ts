import {IRequest, IUser} from '../../../types/types'
import {USER_AVATAR_UPDATE_API } from "../../../services/api";
  
type updateUserJson ={
  status: string,
  message: string,
  error:string,
  user:IUser
}

 export const updateUser  = async (id:string, file:string, request:IRequest<updateUserJson>) =>{
  const token = localStorage.getItem('token')
    const {url, options} = USER_AVATAR_UPDATE_API(token!, id, file)
        const {response, json} = await request(url, options)
    if(response && json){
    return {response, json}
     }
    else return 
} 