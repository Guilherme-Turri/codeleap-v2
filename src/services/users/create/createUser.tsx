import { USER_REGISTER_API } from '../../../services/api'
import { IRequest, IUser } from '../../../types/types'

type CreateUserJson = {
  msg?: string,
  user?: IUser,
  token?: string
}

export const createUser = async (name: string, email: string, password: string, request: IRequest<CreateUserJson>) => {
  const { url, options } = USER_REGISTER_API(name, email, password)
  const { response, json } = await request(url, options);
  if (response && json) {
    return { response, json }
  }
  else return
}

