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



// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { Auth } from 'aws-amplify';
// import ButtonAppBar from './layout/navbar';
// import { SignUp, SignIn, Recommendation, Liked } from './pages';

// function App() {
//   const [isAuthenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     checkAuthStatus();
//   }, []);

//   async function checkAuthStatus() {
//     try {
//       await Auth.currentAuthenticatedUser();
//       setAuthenticated(true);
//     } catch (error) {
//       setAuthenticated(false);
//     }
//   }

//   return (
//     <div>
//       {isAuthenticated ? (
//         <Router>
//           <ButtonAppBar>
//             <Routes>
//               <Route path="/" element={<Recommendation />} />
//               <Route path="/liked" element={<Liked />} />
//               {/* Add other authenticated routes here */}
//             </Routes>
//           </ButtonAppBar>
//         </Router>
//       ) : (
//         <Router>
//           <Routes>
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/signin" element={<SignIn />} />
//             <Route path="/" element={<Navigate to="/signin" />} />
//           </Routes>
//         </Router>
//       )}
//     </div>
//   );
// }

// export default App;
