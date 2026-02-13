import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import CrisisHelp from './pages/CrisisHelp';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        {/* New pages (Sprint 1 placeholders) */}
        <Route path="about" element={<About />} />
        <Route path="resources" element={<Resources />} />
        <Route path="crisis-help" element={<CrisisHelp />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
