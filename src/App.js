import { SignUp, SignIn, Recommendation, Liked } from './pages'
import ButtonAppBar from './layout/navbar'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
        <ButtonAppBar>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/liked" element={<Liked />} />

          <Route path="/" element={<Navigate to="/recommendation" replace />} />
        </Routes>
        </ButtonAppBar>
    </Router>
  );
}

export default App;