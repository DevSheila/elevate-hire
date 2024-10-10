import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use local storage for persistence
import resumeSliceReducer from "./slices/resumeSlice";

// Create a persist configuration object
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["resumeDetails"], // List of reducers you want to persist
};

// Combine reducers
const rootReducer = combineReducers({
  resumeDetails: resumeSliceReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

// Create a persistor
export const persistor = persistStore(store);

setupListeners(store.dispatch);

export default store;
