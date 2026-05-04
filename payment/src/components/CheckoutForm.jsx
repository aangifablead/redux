import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { simulatePayment } from '../features/paymentSlice';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.payment);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { paymentMethod, error: stripeError } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (stripeError) {
      console.log(stripeError.message);
    } else {
      // Logic for practice: Send the ID to our mock Redux thunk
      dispatch(simulatePayment({ id: paymentMethod.id }));
    }
  };

  if (success) return <div className="success-msg">✅ Payment Successful! Thank you.</div>;

return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-800">Secure Checkout</h3>
          <p className="text-sm text-gray-500">Practice Mode: All cards accepted</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Card Label */}
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Card Information
          </label>
          
          {/* Stripe Element Container */}
          <div className="border border-gray-300 rounded-lg p-4 bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
            <CardElement options={cardStyle} />
          </div>

          {/* Feedback Section */}
          {error && (
            <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
              {error}
            </div>
          )}

          {/* Action Button */}
          <button 
            className={`w-full mt-6 py-3 px-4 rounded-lg font-bold text-white transition-all duration-200 
              ${loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md hover:shadow-lg'
              }`}
            type="submit" 
            disabled={!stripe || loading}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : "Confirm & Pay $49.00"}
          </button>

          {/* Security Badges */}
          <div className="mt-6 flex justify-center items-center gap-4 text-gray-400">
            <span className="text-[10px] uppercase font-bold tracking-widest flex items-center gap-1">
              🔒 SSL Encrypted
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest flex items-center gap-1">
              💳 PCI Compliant
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

// Stripe Element Styling
const cardStyle = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": { color: "#aab7c4" }
    },
    invalid: { color: "#fa755a", iconColor: "#fa755a" }
  },
};

export default CheckoutForm;