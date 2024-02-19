import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://dummyjson.com/products');

            if (!response.ok) {
                throw new Error('Error occurred during get products.');
            }

            const data = response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getProduct = createAsyncThunk(
    'products/getProduct',
    async function (productID, { rejectWithValue }) {
        try {
            const response = await fetch(
                `https://dummyjson.com/products/${productID}`
            );

            if (!response.ok) {
                throw new Error('Error occurred during get a product.');
            }

            const data = response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addProduct = createAsyncThunk(
    'products/addProduct',
    async function (newProduct, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });
            if (!response.ok) {
                throw new Error('Error occured during add a new product.');
            }
            const product = await response.json();

            dispatch(addNewProduct(product));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async function (productID, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch(
                `https://dummyjson.com/products/${productID}`
            );

            response;

            if (!response.ok) {
                throw new Error('Error occured during delete product.');
            }

            dispatch(removeProduct(productID));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async function (arg, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch(
                `https://dummyjson.com/products/${arg.productID}`,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(arg.values),
                }
            );

            const data = await response.json();

            dispatch(editProduct(data));
        } catch (error) {}
    }
);

const setErrorMessage = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
};

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        status: null,
        error: null,
        products: [],
        product: {},
    },
    reducers: {
        addNewProduct: (state, action) => {
            state.products = [...state.products, action.payload];
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        },
        editProduct: (state, action) => {
            state.products = state.products.map((product) =>
                product.id === action.payload.id
                    ? { ...product, ...action.payload }
                    : product
            );

            state.product = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.products = action.payload.products;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                setErrorMessage(state, action);
            })
            .addCase(getProduct.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.product = action.payload;
            })
            .addCase(getProduct.rejected, (state, action) => {
                setErrorMessage(state, action);
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                setErrorMessage(state, action);
            })
            .addCase(addProduct.rejected, (state, action) => {
                setErrorMessage(state, action);
            });
    },
});

export const activeProduct = (state) => state.products.product;

export const { addNewProduct, removeProduct, editProduct } =
    productsSlice.actions;
export default productsSlice.reducer;
