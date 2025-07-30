import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "./slices/mediaSlice.js";
import businessProfileReducer from "./slices/businessProfile.js";
import reviewsReducer from "./slices/reviewsSlice.js";

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    businessProfile: businessProfileReducer,
    media: mediaReducer,
  },
});
