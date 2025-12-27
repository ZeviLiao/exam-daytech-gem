import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import GemDetailPage from '@/features/gems/detail/GemDetailPage';
import GemListPage from '@/features/gems/list/GemListPage';
import MainLayout from '@/layouts/MainLayout';
import TailwindTest from '@/pages/TailwindTest';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<GemListPage />} />
          <Route path="/gem/:id" element={<GemDetailPage />} />
        </Route>
        <Route path="/test-tailwind" element={<TailwindTest />} />
      </Routes>
    </Router>
  );
}

export default App;
