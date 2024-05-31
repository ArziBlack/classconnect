import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import otherService from "./otherService";

const initialState = {
  error:'',
  message:'',
  isLoading: false,
  isSuccess: false
};

export const getHomePage = createAsyncThunk("other/welcome", async () => {
    return await otherService.getHomePage().catch(error => console.log(error));
});

export const getTnC_Policy = createAsyncThunk("other/policy", async () => {
    return await otherService.getTnC_Policy().catch(error => console.log(error));
});

export const getTutionFees = createAsyncThunk("other/fees", async()=> {
    return await otherService.getTutionFees().catch(error => console.log(error));
});

const otherSlice = createSlice({
    name:"other",
    initialState,
    extraReducers:{
        [getHomePage.pending]: (state) => {
          state.isLoading = true;
        },
        [getHomePage.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.User = action.payload;
        },
        [getHomePage.rejected]: (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        },
        [getTutionFees.pending]: (state) => {
          state.isLoading = true;
        },
        [getTutionFees.fulfilled]: (state) => {
          state.isLoading = false;
        },
        [getTutionFees.rejected]: (state, action) => {
          state.isLoading = false;
          state.error = action.error.message
        },
        [getTnC_Policy.pending]: (state) => {
          state.isLoading = true;
        },
        [getTnC_Policy.fulfilled]: (state) => {
          state.isLoading = false;
        },
        [getTnC_Policy.rejected]: (state, action) => {
          state.isLoading = false;
          state.error = action.error.message
        }
      }
});

export default otherSlice.reducer;