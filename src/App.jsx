import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

// PAGES
import ResumePage from "./pages/ResumePage";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import ResumeBuilderDashboard from "./pages/ResumeBuilderDashboard/ResumeBuilderDashboard";

import MockInterview from "./pages/MockInterview/page";
import StartInterview from "./pages/MockInterview/interview/[interviewId]/start/page";
import Feedback from "./pages/MockInterview/interview/[interviewId]/feedback/page";
import Interview from "./pages/MockInterview/interview/[interviewId]/page";
import { Toaster } from "./components/ui/toaster";
import Upgrade from "./pages/MockInterview/upgrade/page";
import Templates from "./pages/Templates/Templates";
import ResumePreview from "./elements/ResumeTemplate2/ResumePreview";

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

  return !isSignedIn ? element : <Navigate to="/resume" />;
}

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route
            path="/templates"
            element={<PrivateRoute element={<Templates />} />}
          />

          <Route
            path="/resumebuilder"
            element={<PrivateRoute element={<ResumeBuilderDashboard />} />}
          />

          <Route
            path="/resumebuilder/:id"
            element={<PrivateRoute element={<ResumePage />} />}
          />

          <Route
            path="/preview/:id"
            element={<PrivateRoute element={<ResumePreview />} />}
          />
          {/* ------------- */}
          <Route
            path="/mockinterview"
            element={<PrivateRoute element={<MockInterview />} />}
          />

          <Route
            path="/mockinterview/interview/:interviewId"
            element={<PrivateRoute element={<Interview />} />}
          />

          <Route
            path="/mockinterview/interview/:interviewId/start"
            element={<PrivateRoute element={<StartInterview />} />}
          />

          <Route
            path="/mockinterview/interview/:interviewId/feedback"
            element={<PrivateRoute element={<Feedback />} />}
          />

          <Route
            path="/upgrade"
            element={<PrivateRoute element={<Upgrade />} />}
          />

          {/* ------------ */}

          <Route
            path="/sign-in"
            element={<PublicRoute element={<SignIn />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Toaster />
    </Router>
  );
}

export default App;
