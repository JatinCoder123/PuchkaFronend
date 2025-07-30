import { createSlice } from "@reduxjs/toolkit";
import { backendUrl } from "../../App";

import axios from "axios";

const businessProfileSlice = createSlice({
  name: "businessProfile",
  initialState: {
    loading: false,
    businessProfile: {},
    error: null,
    message: null,
  },
  reducers: {
    loadBusinessProfileRequest(state) {
      state.loading = true;
      state.isAuthenticated = false;
      state.businessProfile = {};
      state.error = null;
    },
    loadBusinessProfileSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.businessProfile = action.payload;
      state.error = null;
    },
    loadBusinessProfileFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.businessProfile = {};
      state.error = action.payload;
    },

    clearAllErrors(state) {
      state.error = null;
      state.businessProfile = state.businessProfile;
    },
  },
});

export const getBusinessProfile = () => {
  return async (dispatch) => {
    dispatch(businessProfileSlice.actions.loadBusinessProfileRequest());
    try {
      const { data } = await axios.get(
        `${backendUrl}/api/v1/businessProfile/profile`,
        {
          withCredentials: true,
        }
      );
      dispatch(
        businessProfileSlice.actions.loadBusinessProfileSuccess(data.profile)
      );
      dispatch(businessProfileSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(
        businessProfileSlice.actions.loadBusinessProfileFailed(
          error.response.data.message
        )
      );
    }
  };
};

export const clearAllBusinessProfileErrors = () => {
  return (dispatch) => {
    dispatch(businessProfileSlice.actions.clearAllErrors());
  };
};
export default businessProfileSlice.reducer;
