import { createSlice } from '@reduxjs/toolkit';
import { evaluate } from 'mathjs';

const calcSlice = createSlice({
  name: 'calculator',
  initialState: { 
    expression: "", 
    isResult: false // Tracks if the current expression is a finished result
  },
  reducers: {
    updateExpression: (state, action) => {
      const char = action.payload;
      const isOperator = ['+', '-', '*', '/'].includes(char);

      // If a result is showing and you type a NUMBER, clear and start fresh
      // If a result is showing and you type an OPERATOR, keep it and continue math
      if (state.isResult && !isOperator) {
        state.expression = char;
      } else {
        state.expression += char;
      }
      state.isResult = false;
    },
    clear: (state) => {
      state.expression = "";
      state.isResult = false;
    },
    calculateResult: (state) => {
        console.log(state.isResult,'statestate')
      try {
        // Check for division by zero before evaluating
        if (state.expression.includes('/0')) {
          alert('you cannot divide by zero');
          state.isResult = true;
          return;
        }

        const result = evaluate(state.expression);
        state.expression = String(result);
        state.isResult = true; // Mark that we are now showing a result
      } catch (e) {
        state.expression = "Error";
        state.isResult = true;
      }
    }
  }
});

export const { updateExpression, clear, calculateResult } = calcSlice.actions;
export default calcSlice.reducer;