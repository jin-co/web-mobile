import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import noteService from './noteService'

const initialState = {
  notes: [],
  note: {},
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: ''
}

export const getNotes = createAsyncThunk(
  'note/getAll',
  async (ticketId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await noteService.getNotes(ticketId, token)
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed')
    }
  }
)

export const addNote = createAsyncThunk(
  'note/add',
  async (ticketId, note, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await noteService.addNote(ticketId, note, token)
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed')
    }
  }
)

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
    .addCase(getNotes.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getNotes.fulfilled, (state) => {
      state.isLoading = true
    })
    .addCase(getNotes.rejected, (state) => {
      state.isLoading = true
    })
  }
})

export default noteSlice.reducer
