/* eslint-disable @typescript-eslint/no-unused-vars */
import { SliceCaseReducers, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type User = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    sex: 0 | 1;
    profilePicture: string;
    position: string;
};

type Company = {
    name: string;
    logo: string;
    address: {
        country: {
            name: string;
        };
        city: {
            name: string;
        };
        street: string;
        house: string;
        zipCode: string;
        longitude: string;
        latitude: string;
    };
};

export type Product = {
    id: number;
    name: string;
    description: string;
    picture: string;
    type: { id: number; name: string };
    categories: Array<{ id: number; name: string }>;
    implementationEffortText: string | null;
    investmentEffort: string;
    trl: { id: number; name: string };
    video: string;
    user: User;
    company: Company;
    businessModels: Array<{ id: number; name: string }>;
};

export const loadProduct = createAsyncThunk("product/loadProduct", async (productId: number) => {
    const response = await fetch(`https://api-test.innoloft.com/product/${productId}/`);
    const product = (await response.json()) as Product;

    return product;
});

export const updateProduct = createAsyncThunk("product/updateProduct", async () => {
    return true;
});

type ProductState = {
    entity: Product | undefined;
    status: "idle" | "loading" | "success" | "error";
    error: string | null;
};

export const productSlice = createSlice<ProductState, SliceCaseReducers<ProductState>, "product">({
    name: "product",
    initialState: {
        entity: undefined,
        status: "idle",
        error: null,
    } satisfies ProductState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadProduct.pending, (state, _) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(loadProduct.rejected, (state, action) => {
                state.status = "error";
                state.error = "Error loading product";
            })
            .addCase(loadProduct.fulfilled, (state, action) => {
                state.entity = action.payload;
                state.status = "success";
            })
            .addCase(updateProduct.pending, (state, action) => {
                console.log("@product/updateProduct: pending");
            })
            .addCase(updateProduct.rejected, (state, action) => {
                console.log("@product/updateProduct: rejected");
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                console.log("@product/updateProduct: fulfilled");
            });
    },
});

// TODO: export selectors
