/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Main from './Main';
import Franchise from './Franchise';
import Exchange from './Exchange';
import StoreRegistration from './StoreRegistration'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/main/*" element={<Main />} />
              <Route path="/franchise/*" element={<Franchise />} />
              <Route path="/exchange/*" element={<Exchange />} />
              <Route path="/storeregistration/*" element={<StoreRegistration />} />
          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
