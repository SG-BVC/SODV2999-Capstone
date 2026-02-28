import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import CrisisHelp from './pages/CrisisHelp';
import Contact from './pages/Contact';

import PatternLanding from './pages/pattern/PatternLanding';
import PatternTemplate from './pages/pattern/PatternTemplate';

import LifeLineLanding from "./pages/lifeline/LifeLineLanding";
import LifeLineTemplate from "./pages/lifeline/LifeLineTemplate";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="pattern" element={<PatternLanding />} />
        <Route path="pattern/:slug" element={<PatternTemplate />} />

        <Route path="about" element={<About />} />
        <Route path="resources" element={<Resources />} />
        <Route path="crisis-help" element={<CrisisHelp />} />
        <Route path="contact" element={<Contact />} />

        <Route path="lifeline-app" element={<LifeLineLanding />} />
<Route path="lifeline-app/:slug" element={<LifeLineTemplate />} />
      </Route>
    </Routes>
  );
}