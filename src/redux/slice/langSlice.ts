import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { ILang } from '../../translation/langChanger/item/ILang';


const initialState: ILang = {
  name: '',
  rtl: false,
  value: '',
  icon: '',
  id: -1

};

const langSlice = createSlice({
  name: 'langReducer',
  initialState,

  reducers: {
    SET_LANGUAGE: (state, action: PayloadAction<ILang>) => {
      state.icon = action.payload?.icon;
      state.id = action.payload?.id;
      state.name = action.payload?.name;
      state.rtl = action.payload?.rtl;
      state.value = action.payload?.value;
    },
  },
});

export const { SET_LANGUAGE } = langSlice.actions;
const langReducer = langSlice.reducer;
export default langReducer;
