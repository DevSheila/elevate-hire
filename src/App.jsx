import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

// PAGES
import SignIn from './SignIn';
import ResumePage from './pages/ResumePage';
import NotFound from './pages/NotFound';


// PrivateRoute component to protect routes that require authentication
function PrivateRoute({ element, ...rest }) {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null; // Avoid rendering anything until the user state is loaded

  return isSignedIn ? element : <Navigate to="/sign-in" />;
}

// PublicRoute component to redirect authenticated users from sign-in or sign-up pages
function PublicRoute({ element, ...rest }) {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null; // Avoid rendering anything until the user state is loaded

  return !isSignedIn ? element : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ResumePage />} />
        <Route exact path="/sign-in" element={<PublicRoute element={<SignIn />} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
