import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type TSelectedProduct = {
  name: string;
  category: string;
  price: number;
  id: string;
};

const initialState: TSelectedProduct[] = [];

const pcbuilderSlice = createSlice({
  name: 'pcbuilder',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TSelectedProduct>) => {
      const { payload } = action;

      const productExist = state.find((p) => p.category === payload.category);

      if (!productExist) {
        state.push(payload);
      } else {
        // check -> is it the same product user is trying to add
        const sameProduct = productExist.id === payload.id;

        if (sameProduct) {
          return state;
        } else {
          return state.map((p) => {
            if (p.category === payload.category) {
              return payload;
            } else {
              return p;
            }
          });
        }
      }
    },
  },
});

export default pcbuilderSlice.reducer;
export const { addProduct } = pcbuilderSlice.actions;
