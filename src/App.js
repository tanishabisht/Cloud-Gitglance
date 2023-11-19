import { SignUp, SignIn, Recommendation, Liked } from './pages'
import ButtonAppBar from './layout/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <ButtonAppBar>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Recommendation />} />
          <Route path="/liked" element={<Liked />} />

        </Routes>
        </ButtonAppBar>
    </Router>
  );
}

export default App;