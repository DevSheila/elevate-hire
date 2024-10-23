import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resume: null,
  past: [],
  future: [],
};

const resumeSlice = createSlice({
  name: "resumeDetails",
  initialState,
  reducers: {
    updateResume: (state, action) => {
      const past = state.past || []; // Ensure past is always an array
      const resume = state.resume;

      state.past = [...past, resume];  // Move current state to past
      state.resume = { ...resume, ...action.payload };  // Update the resume state
      state.future = [];  // Clear future history on new changes
    },
    undo: (state) => {
      const past = state.past || [];  // Ensure past is an array
      const future = state.future || [];  // Ensure future is an array
      const resume = state.resume;

      if (past.length > 0) {
        const previous = past[past.length - 1];
        state.future = [resume, ...future];  // Move resume state to future
        state.past = past.slice(0, past.length - 1);  // Remove the last item from past
        state.resume = previous;  // Restore the last item in past as resume
      }
    },
    redo: (state) => {
      const past = state.past || [];  // Ensure past is an array
      const future = state.future || [];  // Ensure future is an array
      const resume = state.resume;

      if (future.length > 0) {
        const next = future[0];
        state.past = [...past, resume];  // Move resume to past
        state.resume = next;  // Restore the first future state as resume
        state.future = future.slice(1);  // Remove the restored state from future
      }
    },
  },
});

export const { updateResume, undo, redo } = resumeSlice.actions;
export default resumeSlice.reducer;
