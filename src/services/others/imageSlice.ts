import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    url: '',
  },
  reducers: {
    setImageUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { setImageUrl } = imageSlice.actions;
export default imageSlice.reducer;