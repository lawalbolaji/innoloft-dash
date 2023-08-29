import { combineReducers, PreloadedState, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../scenes/Product.slice";
import { rootConfigSlice } from "../config/app.config.slice";

const rootReducer = combineReducers({
    product: productSlice.reducer,
    configs: rootConfigSlice.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
    configureStore({
        reducer: rootReducer,
        preloadedState,
    });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
