import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      {/* MainLayout wraps all nested pages */}
      <Route path="/" element={<MainLayout />}>
        {/* Index route (Home) */}
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
