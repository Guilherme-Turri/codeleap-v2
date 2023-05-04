import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user';
import modalReducer from './modal/modal';
import postReducer from './posts/posts'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user','posts', 'modal'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const persistedPostReducer = persistReducer(persistConfig, postReducer);
//const persistedModalReducer = persistReducer(persistConfig, modalReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
    modal: modalReducer,
    posts: persistedPostReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
