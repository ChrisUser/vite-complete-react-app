import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch } from '../reducers/store'
import { setContents } from './data'

export const getData = createAsyncThunk<void, string, { dispatch: AppDispatch }>('groupedActions/getData', async (string, { dispatch }) => {
    try {
        const data: any[] = await axios.get(`https://fakeurl.fake/${string}`).then((response) => response.data.results)
        dispatch(setContents(data))
    } catch (e) {
        console.error(e)
        throw e
    }
})
