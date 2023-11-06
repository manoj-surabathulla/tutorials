/* eslint-disable react-refresh/only-export-components */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userData: [],
  loading: false,
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const res = await axios.get("http://localhost:3030/api/v1/user");
  // console.log("resp", res);
  return res.data.users;
});

export const postUser = createAsyncThunk("users/postUser", async (data) => {
  console.log("data", data);
  const res = await axios.post("http://localhost:3030/api/v1/user", data);
  console.log("resp", res);
  return res;
});

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // addUser: (state, action) => {
    //   state.push(action.payload);
    //   console.log(action);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userData = payload;
      })
      .addCase(postUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(postUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log("postUser", payload);
        state.userData.push(payload);
      });
  },
});

// export const { addUser } = UserSlice.actions;
export default UserSlice.reducer;
