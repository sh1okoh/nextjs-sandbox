import { createAsyncThunk } from '@reduxjs/toolkit';

export const asyncFetchNews = createAsyncThunk<string, string>(
  'news/fetchNews',
 async (args: string): Promise<string> => { 
   
   return args
 }
)