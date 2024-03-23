import { createReducer } from '@reduxjs/toolkit'
import { setContents } from '../actions/data'

interface DataReducer {
    contents: string[]
}

const initialState: DataReducer = {
    contents: []
}

const dataReducer = createReducer<DataReducer>(initialState, (builder) => {
    builder.addCase(setContents, (state, action) => {
        state.contents = action.payload
    })
})

export default dataReducer
