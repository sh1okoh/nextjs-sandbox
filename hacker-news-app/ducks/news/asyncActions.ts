import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const asyncFetchNews = createAsyncThunk<string, string>(
  'news/fetchNews',
  async (): Promise<string> => { 
    const endpoint = 'https://hacker-news.firebaseio.com/v0/newstories.json'
    const res = axios.get(endpoint).then((response) => {
      return response.data
    })
    return res;
  }
)