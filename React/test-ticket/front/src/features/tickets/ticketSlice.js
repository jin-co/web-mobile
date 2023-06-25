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

export const createTicket = createAsyncThunk(
  'tickets/create',
  async (ticket, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await ticketService.createTicket(ticket, token)
    } catch (error) {      
      return thunkAPI.rejectWithValue('message')
    }
  }
)

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    reset: (state) => initialState
  }
})

export default ticketSlice.reducer
