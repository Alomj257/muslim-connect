import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { gigsApi } from "../ApiService/GigsService/GigsService";
import { authApi } from "../ApiService/AuthSlice/AuthSlice";

export const store = configureStore({
  reducer: {
    [gigsApi.reducerPath]: gigsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gigsApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
