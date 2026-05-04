import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function App() {
  const handleSuccess = (credentialResponse) => {
    // The 'credential' is a coded JWT string
    const token = credentialResponse.credential;
    
    // Decode the token to get user profile info (email, name, picture)
    const userDetails = jwtDecode(token);
    
    console.log("Login Successful!");
    console.log("User Data:", userDetails);
    
    // You can now save userDetails to your state or local storage
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>React Google Login</h1>
      <div style={{ display: 'inline-block' }}>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          useOneTap // Optional: shows a small popup for returning users
        />
      </div>
    </div>
  );
}

export default App;