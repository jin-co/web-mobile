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
  async ({ticketId, note}, thunkAPI) => {
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
      .addCase(getNotes.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true        
        state.notes = action.payload
      })
      .addCase(getNotes.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.message = 'Error'
      })
      .addCase(addNote.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addNote.fulfilled, (state, action) => {
        state.isLoading = false
        state.notes = action.payload
      })
      .addCase(addNote.rejected, (state) => {
        state.isLoading = false
        state.notes = null
        state.isError = true
        state.message = 'failed'
      })
  }
})

export default noteSlice.reducer
