import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";

 const store = configureStore({
  reducer: {
        user: UserReducer,
        
    }
}) 
export default store;
 
 // src/redux/store.js
// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import UserReducer from "./UserSlice";
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, UserReducer);

// // Get default Redux Toolkit middleware
// const middleware = [...getDefaultMiddleware(), thunk];

// export const store = configureStore({
//     reducer: {
//         user: persistedReducer,
//         devTools: process.env.NODE_ENV !== 'production',
//     },
//     middleware: middleware
// });

// export const persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import UserReducer from "./UserSlice";
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
// import storageSession from 'redux-persist/lib/storage/session'
// import thunk from 'redux-thunk';

// const persistConfig = {
//     key: 'root',
//     storage,
//     //storageSession
// }

// const persistedReducer = persistReducer(persistConfig, UserReducer)
// export const store = configureStore({
//     reducer: {
//         user: persistedReducer,
//         devTools: process.env.NODE_ENV !== 'production',
//     },
//     // reducer: persistedReducer,
//     // devTools: process.env.NODE_ENV !== 'production',
//     middleware: [thunk]
// })

// export const persistor = persistStore(store)





