/* import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "7f5449088amsh5eba8030d7b34ccp1ae1d0jsn123129682823",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints : (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/query"),
    }),
  }),
});
export const { useGetCryptosQuery } = cryptoApi;

*/

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '7f5449088amsh5eba8030d7b34ccp1ae1d0jsn123129682823',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

};
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const creatRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "createApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => creatRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  // useGetCryptoDetailsQuery,
  // useGetCryptoHistoryQuery,
} = cryptoApi;