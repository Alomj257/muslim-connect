import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { gigsApi } from "../ApiService/GigsService/GigsService";

export const store = configureStore({
  reducer: {
    [gigsApi.reducerPath]: gigsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gigsApi.middleware),
});

setupListeners(store.dispatch);
