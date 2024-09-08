import React from 'react'
import DashBoard from "./components/DashBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import ResetPassword from './components/auth/ResetPassword';
import { AuthProvider } from './components/contexts/AuthProvider';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" Component={DashBoard} />
          <Route exact path="/login" Component={LogIn} />
          <Route exact path="/signup" Component={SignUp} />
          <Route exact path="/reset-password" Component={ResetPassword} />
        </Routes>
      </AuthProvider>
    </Router>
    
  );
}

export default App;
