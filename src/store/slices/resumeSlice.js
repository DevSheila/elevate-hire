import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resume: null,
};


const resumeDetailsSlice = createSlice({
  name: 'resumeDetails',
  initialState,
  reducers: {
    createResume: (state, action) => {
      state.resume = action.payload;
    },
    readResume: (state) => {
      return state.resume;
    },
    updateResume: (state, action) => {
      state.resume = { ...state.resume, ...action.payload };
    },
    deleteResume: (state) => {
      state.resume = null;
    },
  },
});

export const { createResume, readResume, updateResume, deleteResume } = resumeDetailsSlice.actions;
export default resumeDetailsSlice.reducer;
