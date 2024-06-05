import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      // Sending data to auth endpoint
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    verify: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/verify`,
        method: "POST",
        body: data,
      }),
    }),
    sendRecoveryEmail: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/sendMail`,
        method: "POST",
        body: data,
      }),
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/updatepw`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useVerifyMutation,
  useSendRecoveryEmailMutation,
  useUpdatePasswordMutation,
} = usersApiSlice;
