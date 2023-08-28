import { combineReducers, PreloadedState, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../scenes/Product.slice";

const rootReducer = combineReducers({
    product: productSlice.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
    configureStore({
        reducer: rootReducer,
        preloadedState,
    });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
