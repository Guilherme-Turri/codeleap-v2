export interface IUser {
  _id: string;
  name: string;
  email: string;
  avatarPic?:string|null;
}

export interface IPost{
  _id:string,
  author:string,
  authorId: string,
  content:string,
  title:string,
  createdAt:string
  avatarPic?:string|null;
 }

export interface IModal  {
  showModal: boolean,
  modalType:string;
  userId?:string,
  postId?: string,
  avatarPic?:string,
}

export type valuesForm = {
  onChange: React.ChangeEventHandler<HTMLInputElement> ,
  value: string,
  error?: string
}

export type valuesFormTextArea = {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> ,
  value: string,
  error?: string
}

export type IRequest<T> = (url: string, options: RequestInit) => Promise<{
  response:any,
  json: T | null;
}>

export interface isMobile{
  isMobile:boolean
}