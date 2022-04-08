import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export type NewsState = {
  title: string;
  content: string;
  loading: boolean;
  error: boolean;
  errorMessage: string;
}


export const initialState: NewsState = {
  title: '',
  content: '',
  loading: false,
  error: false,
  errorMessage: '',
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // TODO: news検索処理等を作る
  },
  extraReducers: (builder) => {
    
  }
})