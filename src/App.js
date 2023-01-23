import { Route, Link, Routes } from 'react-router-dom';
import './App.css';
import CreateClaim from './components/CreateClaim'
import ClaimListPage from './pages/ClaimListPage';

function App() {
  return (
      <div>
        <Link to="/">Click here for Home</Link>
        <br></br>
        <Link to="/createClaim">Click here for Create Claim</Link>

        <Routes>
          <Route path="/" element={<ClaimListPage />} />
          <Route path="/createClaim" element={<CreateClaim/>} />
        </Routes>
      </div>
  );
}

export default App;
