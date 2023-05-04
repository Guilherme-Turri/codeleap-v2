import {storage} from '../images/firebase'
import {ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import {v4 as createId} from 'uuid'

export const setPhoto = async (file:File) =>{
  let randonName = createId();
  let newFile = ref(storage, `images/${randonName}` )
  let upload = await uploadBytes(newFile, file); 
  let photoUrl = await getDownloadURL(upload.ref)
  return photoUrl;
}