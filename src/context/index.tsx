import { useContext } from 'react';
import MyGlobalContext from './MyGlobalContext';

export const useGlobalContext = () => useContext(MyGlobalContext);
