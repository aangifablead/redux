import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "multiStep",
    initialState: {
        currentStep: 0,
        formData: {
            user: "",
            email: "",
            address: "",
            city: "",
            phone: "",
            hobby: "",
        },
        submissions: [],
    },
    reducers: {
        updateField: (state, action) => {
            state.formData[action.payload.name] = action.payload.value;
        },
        nextStep: ((state) => {
            state.currentStep += 1
        }),
        prevStep: ((state) => {
            state.currentStep -= 1
        }),
        submitForm: (state) => {
            state.submissions.push({ ...state.formData, id: Date.now() });
            // Reset logic
            state.formData = { user: "", email: "", address: "", city: "", phone: "", hobby: "" };
            state.currentStep = 0;
        },
    },
});

export const { updateField, nextStep, prevStep, submitForm } = formSlice.actions;
export default formSlice.reducer;