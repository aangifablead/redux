import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateField, nextStep, submitForm, prevStep } from "./features/multiStepSlice";

const MultiStepForm = () => {
    const dispatch = useDispatch();
    const { currentStep, formData } = useSelector((state) => state.multiStep);
    const [errors, setErrors] = useState({}); // Local state for validation errors

    const steps = ["User Details", "Address", "Personal", "Review"];

    const handleChange = (e) => {
        const { id, value } = e.target;
        dispatch(updateField({ name: id, value }));

        // Remove error styling as user types
        if (value.trim() !== "") {
            setErrors((prev) => ({ ...prev, [id]: false }));
        }
    };

    const validate = () => {
        let newErrors = {};

        // Step 1 Validation: Name and Email
        if (currentStep === 0) {
            if (!formData.user.trim()) {
                newErrors.user = "Username is required";
            }

            // Email Regex: Checks for user@domain.extension
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formData.email.trim()) {
                newErrors.email = "Email is required";
            } else if (!emailRegex.test(formData.email)) {
                newErrors.email = "Please enter a valid email address";
            }
        }

        // Step 2 Validation: Address and City
        else if (currentStep === 1) {
            if (!formData.address.trim()) newErrors.address = "Address is required";
            if (!formData.city.trim()) newErrors.city = "City is required";
        }

        // Step 3 Validation: Phone and Hobby
        else if (currentStep === 2) {
            // Phone Regex: Checks for exactly 10 digits
            const phoneRegex = /^\d{10}$/;
            if (!formData.phone.trim()) {
                newErrors.phone = "Phone number is required";
            } else if (!phoneRegex.test(formData.phone)) {
                newErrors.phone = "Enter a valid 10-digit phone number";
            }

            if (!formData.hobby) {
                newErrors.hobby = "Please select a hobby";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validate()) {
            if (currentStep < steps.length - 1) {
                dispatch(nextStep());
            } else {
                alert("Form Submitted!");
                dispatch(submitForm());
            }
        }
    };

    return (
        <div className="form-container">
            {/* Progress Circles */}
            <div className="progress">
                {steps.map((_, idx) => (
                    <div key={idx} className={`circle ${idx <= currentStep ? "active" : ""}`}>
                        {idx + 1}
                    </div>
                ))}
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
                {/* Step 1: User */}
                <div className={`step ${currentStep === 0 ? "active" : ""}`}>
                    <h2>User Name Details</h2>
                    <label>Name</label>
                    <input
                        id="user"
                        className={errors.user ? "invalid" : ""}
                        value={formData.user}
                        onChange={handleChange}
                        placeholder="Username"
                    />
                    {errors.user && <span className="error-msg" style={{ display: 'block' }}>{errors.user}</span>}

                    <label>Email</label>
                    <input
                        id="email"
                        type="email"
                        className={errors.email ? "invalid" : ""}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    {errors.email && <span className="error-msg" style={{ display: 'block' }}>{errors.email}</span>}
                </div>

                {/* Step 2: Address */}
                <div className={`step ${currentStep === 1 ? "active" : ""}`}>
                    <h2>Address Details</h2>
                    <label>Address</label>
                    <input
                        id="address"
                        className={errors.address ? "invalid" : ""}
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                    />
                    {errors.address && <span className="error-msg" style={{ display: 'block' }}>{errors.address}</span>}

                    <label>City</label>
                    <input
                        id="city"
                        className={errors.city ? "invalid" : ""}
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                    />
                    {errors.city && <span className="error-msg" style={{ display: 'block' }}>{errors.city}</span>}
                </div>

                {/* Step 3: Personal */}
                <div className={`step ${currentStep === 2 ? "active" : ""}`}>
                    <h2>Personal Details</h2>
                    <label>Phone</label>
                    <input
                        id="phone"
                        className={errors.phone ? "invalid" : ""}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                    />
                    {errors.phone && <span className="error-msg" style={{ display: 'block' }}>{errors.phone}</span>}

                    <label>Hobby</label>
                    <select
                        id="hobby"
                        className={errors.hobby ? "invalid" : ""}
                        value={formData.hobby}
                        onChange={handleChange}
                    >
                        <option value="">Select Hobby</option>
                        <option value="Reading">Reading</option>
                        <option value="Traveling">Traveling</option>
                        <option value="Cooking">Cooking</option>
                    </select>
                    {errors.hobby && <span className="error-msg" style={{ display: 'block' }}>{errors.hobby}</span>}
                </div>

                {/* Step 4: Summary */}
                <div className={`step ${currentStep === 3 ? "active" : ""}`}>
                    <h2>Review & Submit</h2>
                    <div id="summary">
                        <p><strong>Name:</strong> {formData.user}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Address:</strong> {formData.address}, {formData.city}</p>
                        <p><strong>Phone:</strong> {formData.phone}</p>
                        <p><strong>Hobby:</strong> {formData.hobby}</p>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="btn-group">
                    {currentStep > 0 && (
                        <button type="button" id="prevBtn" onClick={() => dispatch(prevStep())}>
                            Previous
                        </button>
                    )}
                    <button
                        type="button"
                        id={currentStep === 3 ? "submitBtn" : "nextBtn"}
                        onClick={handleNext}
                        style={{ backgroundColor: currentStep === 3 ? "rgb(247, 132, 1)" : "#f1942a" }}
                    >
                        {currentStep === 3 ? "Submit" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MultiStepForm;