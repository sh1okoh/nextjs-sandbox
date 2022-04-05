import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CounterState = {
  count: number;
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

export const initialState: CounterState = {
  count: 0,
  loading: false,
  error: false,
  errorMessage: '',
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state: CounterState, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload
    }),
    decrementCounter: (state: CounterState, action: PayloadAction<number>) => ({
      ...state,
      count: state.count - action.payload
    })
  }
})

export default counterSlice;
