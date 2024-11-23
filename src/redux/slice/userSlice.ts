import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import IUser from './intefaces/IUser';


const initialState: IUser = {
  email: '',
  firstName: "",
  lastName: "",
  serverId: '0'
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,

  reducers: {
    SET_USER: (state, action: PayloadAction<IUser>) => {
      state.email = action.payload?.email;
      state.firstName = action.payload?.firstName;
      state.serverId = action.payload?.serverId;
      state.lastName = action.payload?.lastName;
    },
  },
});

export const { SET_USER } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
