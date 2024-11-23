import { ILang } from './ILang';
export const Farsi: ILang = {
  id: 1,
  name: 'فارسی',
  value: 'fa',
  rtl: true,
};
export const Arabic: ILang = {
  id: 2,
  name: 'العربیه',
  value: 'ar',
  rtl: true,
};
export const English: ILang = {
  id: 3,
  name: 'English',
  value: 'en',
  rtl: false,
};
export default [Farsi, /*Arabic,*/ English];
