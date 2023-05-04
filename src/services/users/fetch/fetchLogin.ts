import { USER_LOGIN_API } from '../../api';
import { IRequest } from "../../../types/types";

type FetchJson ={
    token?:string,
    status?:string,
}

 export const fetchLogin = async (email: string, password: string, request: IRequest<FetchJson>)=> {
  const { url, options } = USER_LOGIN_API(email, password)
  const { response, json } = await request(url, options);
 if(response && json){
  return {response, json}
 }
  else return 
 }

  

