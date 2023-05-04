import { USER_TOKEN_API } from "../../api";
import { IUser } from "../../../types/types";
import { IRequest } from "../../../types/types";
 
type AuthJson ={
    status?: string,
    user?: IUser
 }

export const authLogin = async (token: string, email: string, password: string, request: IRequest<AuthJson>) => {
  const { url, options } = USER_TOKEN_API(token, email, password);
  const { response, json } = await request(url, options);
  if (response && json) {
    return { response, json };
  } else {
    return undefined;
  }
};

