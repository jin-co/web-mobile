import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import ticketService from './ticketService'

const initialState = {
  tickets: [],
  ticket: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getTickets = createAsyncThunk(
  'ticket/getAll',
  async(_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token      
      return await ticketService.getTickets(token)
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed')
    }
  }
)

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
    .addCase(getTickets.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getTickets.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.tickets = action.payload
    })
    .addCase(getTickets.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
  }
})

export const { reset } = ticketSlice.actions
export default ticketSlice.reducer
