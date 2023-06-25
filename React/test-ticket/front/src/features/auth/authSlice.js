import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authService"

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const join = createAsyncThunk(
  'auth/join',
  async (user, thunkAPI) => {
    try {
      return await authService.join(user)
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed')
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      return await authService.login(user)
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed')
    }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async (thunkAPI) => {
    try {
      await authService.logout()
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed')
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(join.pending, (state) => {
        state.isLoading = true
      })
      .addCase(join.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(join.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isSuccess = true
        state.user = null
      })
  }
})

export const { reset } = authSlice.actions
export default authSlice.reducer
