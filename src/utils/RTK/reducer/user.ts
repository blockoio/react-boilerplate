import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  username: string;
  isLogin: boolean;
  accessToken: null | string;
}

const initialState: IUser = {
  username: "",
  isLogin: false,
  accessToken: null,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.username = action.payload.username;
      state.accessToken = action.payload.accessToken;
      state.isLogin = true;
      return state;
    },
    clearUser(state) {
      console.log("cleared the user");
      state = initialState;
      return state;
    },
  },
});

export const { loginUser, clearUser } = user.actions;

export default user.reducer;
