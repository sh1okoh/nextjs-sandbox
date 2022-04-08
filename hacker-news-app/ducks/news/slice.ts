import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { asyncFetchNews } from './asyncActions';

export type NewsContentState = {
  title: string;
  content: string;
  url: string;
}

export type NewsState = {
  news: NewsContentState[],
  loading: boolean,
  error: boolean,
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
    });
    builder.addCase(
      asyncFetchNews.rejected,
      (state, action: RejectedAction<string>) => {
        return {
          ...state,
          loading: false,
          error: true,
          errorMessage: action.error.message,
        };
      },
    );
    builder.addCase(
      asyncFetchNews.fulfilled,
      (state: NewsState, action: PayloadAction<string>) => {
        return {
          ...state,
          loading: false,
          error: false,
          errorMessage: '',
        }
      }
    );
  }
})