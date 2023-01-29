import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../Assets/cryptoAPI'
export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware)
});
// console.log(cryptoApi);
// const cors = require(‘cors’)