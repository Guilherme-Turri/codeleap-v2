import { Dispatch } from "redux";
import { setPosts } from "../../store/posts/posts";
import { IPost } from "../../types/types";

export const setPost = (data:IPost[], dispatch: Dispatch) => {
  dispatch(setPosts(data));
}