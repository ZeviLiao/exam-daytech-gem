import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GemList from './pages/GemList';
import GemDetail from './pages/GemDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GemList />} />
        <Route path="/gem/:id" element={<GemDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
