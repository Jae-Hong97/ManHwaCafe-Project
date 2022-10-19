/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Main from './Main'
import ModifySit from './ModifySit';
import UsageDetails from './UsageDetails';
import Income from './Income';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/main/*" element={<Main />} />
              <Route path="/modifysit/*" element={<ModifySit />} />
              <Route path="/usagedetails/*" element={<UsageDetails />} />
              <Route path="/income/*" element={<Income />} />
          </Routes>

        </BrowserRouter>

    </div>
  );
}

export default App;
