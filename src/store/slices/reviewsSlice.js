import { createSlice } from "@reduxjs/toolkit";
import { backendUrl } from "../../App";

import axios from "axios";

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    loading: false,
    reviews: [],
    error: null,
    message: null,
  },
  reducers: {
    getAllReviewRequest(state) {
      state.reviews = [];
      state.error = null;
      state.loading = true;
    },
    getAllReviewSuccess(state, action) {
      state.reviews = action.payload;
      state.error = null;
      state.loading = false;
    },
    getAllReviewFailed(state, action) {
      state.reviews = state.reviews;
      state.error = action.payload;
      state.loading = false;
    },

    clearAllErrors(state) {
      state.error = null;
      state.reviews = state.reviews;
    },
  },
});

export const getAllReviews = () => {
  return async (dispatch) => {
    dispatch(reviewSlice.actions.getAllReviewRequest());
    try {
      const { data } = await axios.get(`${backendUrl}/api/v1/review/getall`, {
        withCredentials: true,
      });
      dispatch(reviewSlice.actions.getAllReviewSuccess(data.reviews));
      dispatch(reviewSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(
        reviewSlice.actions.getAllReviewFailed(error.response.data.message)
      );
    }
  };
};
export default reviewSlice.reducer;
