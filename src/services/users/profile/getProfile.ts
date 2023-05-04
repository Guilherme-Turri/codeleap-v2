import { USER_GET_API} from '../../api';
import { IRequest, IUser } from "../../../types/types";

type getUserJson ={
user:IUser,
status:string,
message:string
}

 export const getProfile = async (id: string, request: IRequest<getUserJson>)=> {
  const { url, options } = USER_GET_API(id)
  const { response, json } = await request(url, options);
 if(response && json){
  return {response, json}
 }
  else return 
 }

  

