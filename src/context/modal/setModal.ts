import { openModal } from "../../store/modal/modal";
import { IModal } from "../../types/types"
import { Dispatch } from "redux";

export const setModal = (modalData: IModal, dispatch: Dispatch) => {
  dispatch(openModal(modalData));
}