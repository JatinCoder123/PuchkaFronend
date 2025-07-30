import { createSlice } from "@reduxjs/toolkit";
import { backendUrl } from "../../App";

import axios from "axios";

const mediaSlice = createSlice({
  name: "medias",
  initialState: {
    loading: false,
    medias: [],
    error: null,
    message: null,
  },
  reducers: {
    getAllMediasRequest(state) {
      state.medias = [];
      state.error = null;
      state.loading = true;
    },
    getAllMediasSuccess(state, action) {
      state.medias = action.payload;
      state.error = null;
      state.loading = false;
    },
    getAllMediasFailed(state, action) {
      state.medias = state.medias;
      state.error = action.payload;
      state.loading = false;
    },

    clearAllErrors(state) {
      state.error = null;
      state.medias = state.medias;
    },
  },
});

export const getAllMedias = () => {
  return async (dispatch) => {
    dispatch(mediaSlice.actions.getAllMediasRequest());
    try {
      const { data } = await axios.get(`${backendUrl}/api/v1/media/getall`, {
        withCredentials: true,
      });
      dispatch(mediaSlice.actions.getAllMediasSuccess(data.allMedia));
      dispatch(mediaSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(
        mediaSlice.actions.getAllMediasFailed(error.response.data.message)
      );
    }
  };
};

export const clearAllMediasErrors = () => {
  return (dispatch) => {
    dispatch(mediaSlice.actions.clearAllErrors());
  };
};
export default mediaSlice.reducer;
