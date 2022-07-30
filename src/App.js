import * as React from 'react';
import SignIn from './component/signin'
import SignUp from './component/signup'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  return (
    // <SignIn />
      /* <Routes>
          <Route exact path="/" component={SignUp} />
          <Route path="/signIn" component={SignIn} /> 
        <Routes> */
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
  );
}