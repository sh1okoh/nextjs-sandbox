import { createSlice } from '@reduxjs/toolkit';
import { asyncFetchNews } from './asyncActions';


export type NewsContentState = {
  title: string;
  content: string;
  url: string;
}

export type NewsState = {
  news: NewsContentState[],
  loading: false,
  error: false,
  errorMessage: string
}

export const initialState: NewsState = {
  news: [],
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
    builder.addCase(asyncFetchNews.pending, (state) => {
      return {
        ...state,

      }
    })
  }
})