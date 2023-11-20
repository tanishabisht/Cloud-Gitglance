import { SignUp, SignIn, Recommendation, Liked } from './pages'
import ButtonAppBar from './layout/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports.js';


Amplify.configure(awsExports);


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

export default withAuthenticator(App, { includeGreetings: true, loginMechanisms: ['email'] });