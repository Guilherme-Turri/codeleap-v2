import { Dispatch } from "redux";
import { unsetPosts } from "../../store/posts/posts";

export const unSetPost = ( dispatch: Dispatch) => {
  dispatch(unsetPosts());
}