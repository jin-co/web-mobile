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
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await ticketService.getTickets(token)
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed')
    }
  }
)

export const getTicket = createAsyncThunk(
  'ticket/get',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await ticketService.getTicket(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed')
    }
  }
)

export const addTicket = createAsyncThunk(
  'ticket/add',
  async (ticket, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await ticketService.addTicket(ticket, token)
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed')
    }
  }
)

export const closeTicket = createAsyncThunk(
  'ticket/close',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await ticketService.closeTicket(id, token)
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
      .addCase(addTicket.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addTicket.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tickets = action.payload
      })
      .addCase(addTicket.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getTicket.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTicket.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.ticket = action.payload
      })
      .addCase(getTicket.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(closeTicket.pending, (state) => {
        state.isLoading = true
      })
      .addCase(closeTicket.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.ticket = action.payload
      })
      .addCase(closeTicket.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = ticketSlice.actions
export default ticketSlice.reducer
