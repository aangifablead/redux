import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulating a backend call
export const simulatePayment = createAsyncThunk(
  'payment/simulate',
  async (paymentData, { rejectWithValue }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Randomly simulate success (80% chance)
        if (Math.random() > 0.2) {
          resolve({ id: 'txn_mock_' + Date.now(), status: 'succeeded' });
        } else {
          reject("Your card was declined. Please try again.");
        }
      }, 2000);
    });
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState: { loading: false, success: false, error: null },
  reducers: {
    resetPayment: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(simulatePayment.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(simulatePayment.fulfilled, (state) => { state.loading = false; state.success = true; })
      .addCase(simulatePayment.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  }
});

export const { resetPayment } = paymentSlice.actions;
export default paymentSlice.reducer;