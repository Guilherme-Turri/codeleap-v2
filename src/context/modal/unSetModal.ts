import { Dispatch } from "redux";
import { closeModal } from "../../store/modal/modal";

export const unSetModal = (dispatch: Dispatch) => {
  dispatch(closeModal())
}