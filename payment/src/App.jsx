import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { store } from './app/store';
import CheckoutForm from './components/CheckoutForm';

const stripePromise = loadStripe('pk_test_51TRVCe3tcFgrNDgt8GeH92BkJIFZyhDhtklT2g7RJcH2RW1BTtzYWWTEX5L1sahCHFheHOBmlBSj4Qt5KC7Vss9C00sKiy64Qq');

function App() {
  return (
      <Elements stripe={stripePromise}>
        <div className="App">
          <CheckoutForm />
        </div>
      </Elements>
  );
}
export default App