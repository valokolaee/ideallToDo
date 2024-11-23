import { ILang } from '../../translation/langChanger/item/ILang';
import IUser from '../slice/intefaces/IUser';
import { SET_LANGUAGE } from '../slice/langSlice';
import { SET_USER } from '../slice/userSlice';
import { appDispatch } from '../store';

// export const setToken = (token: string | undefined) => {
//   appDispatch(SET_USER({ token }));
// };


export const setUser = (data: IUser | undefined) => {
  appDispatch(SET_USER(data!));
};
export const setLanguage = (data: ILang | undefined) => {
  appDispatch(SET_LANGUAGE(data!));
};