/* eslint-disable @typescript-eslint/no-unused-vars */
import { SliceCaseReducers, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

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

export const loadProduct = createAsyncThunk("product/loadProduct", async (productId: number, thunkAPI) => {
    try {
        const response = await window.fetch(`https://api-test.innoloft.com/product/${productId}/`);

        if (response.ok) {
            const product = (await response.json()) as Product;

            return product;
        }

        // TODO: need better errors from the api but this will do for now
        return thunkAPI.rejectWithValue(response.statusText);
    } catch (error: unknown) {
        return thunkAPI.rejectWithValue((error as Error).toString());
    }
});

export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async (updates: Partial<Omit<Product, "id">>, thunkAPI) => {
        try {
            const { entity } = (thunkAPI.getState() as RootState).product;

            if (entity !== undefined) {
                const response = await window.fetch(`https://api-test.innoloft.com/product/${entity.id}/`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updates),
                });

                if (response.ok) {
                    const updatedProduct = (await response.json()) as Product;

                    return updatedProduct;
                }

                return thunkAPI.rejectWithValue(response.statusText);
            }
        } catch (error: unknown) {
            return thunkAPI.rejectWithValue((error as Error).toString());
        }

        // !!! app should never enter this state
        return thunkAPI.rejectWithValue("Missing product id");
    }
);

type Status = "idle" | "loading" | "success" | "error";

type ProductState = {
    entity: Product | undefined;
    status: Status;
    error: string | null;
    updateStatus: Status;
    updateError: string | null;
};

export const productSlice = createSlice<ProductState, SliceCaseReducers<ProductState>, "product">({
    name: "product",
    initialState: {
        entity: undefined,
        status: "idle",
        error: null,
        updateStatus: "idle",
        updateError: null,
    } satisfies ProductState,
    reducers: {
        productUpdateIdled(state, _: unknown) {
            state.updateStatus = "idle";
            state.updateError = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadProduct.pending, (state, _) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(loadProduct.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload as string;
            })
            .addCase(loadProduct.fulfilled, (state, action) => {
                state.entity = action.payload;
                state.status = "success";
            })
            .addCase(updateProduct.pending, (state, _) => {
                state.updateStatus = "loading";
                state.updateError = null;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                // TODO: add toast notify user that update failed
                state.updateStatus = "error";
                state.updateError = action.payload as string;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.updateStatus = "success";
                state.entity = action.payload;
            });
    },
});

// TODO: export selectors

export const { productUpdateIdled } = productSlice.actions;
