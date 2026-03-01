import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Resource from './pages/Resource';
import PatternInterrupt from './pages/PatternInterrupt';
import ScrollToTop from './navigation/ScrollToTop';
import ResourceCoping from './pages/ResourceCoping';
import ResourceHowToHelp from './pages/ResourceHowToHelp';
import ResourceSearchProfessional from './pages/ResourceSearchProfessional';
import ResourceWarningSigns from './pages/ResourceWarningSigns';
import ResourceSelfManagement from './pages/ResourceSelfManagement';
import ResourceECounselling from './pages/ResourceECounselling';
import ResourcePTSD from './pages/ResourcePTSD';
import ResourceGrief from './pages/ResourceGrief';
import ResourceDepression from './pages/ResourceDepression';
import ResourceAnxiety from './pages/ResourceAnxiety';
import ResourceAddiction from './pages/ResourceAddiction';
import ResourceAttemptSurvivors from './pages/ResourceAttemptSurvivors';
import ResourceBereavedSupport from './pages/ResourceBereavedSupport';
import ResourceOrganizations from './pages/ResourceOrgaanizations';

export default function App() {
  return (
    <>
      <ScrollToTop /> {/* Move Routes to top*/}
      <Routes>
        {/* MainLayout wraps all nested pages */}
        <Route path="/" element={<MainLayout />}>
          {/* Index route (Home) */}
          <Route index element={<Home />} />
          <Route path="/resources" element={<Resource />} />
          <Route path="/pattern-interrupt" element={<PatternInterrupt />} />

          <Route path="/resources/suicidal-thoughts" element={<ResourceCoping />} />
          <Route path="/resources/how-to-help" element={<ResourceHowToHelp />} />
          <Route path="/resources/warning-signs" element={<ResourceWarningSigns />} />
          <Route path="/resources/self-management" element={<ResourceSelfManagement />} />
          <Route path="/resources/search-professional" element={<ResourceSearchProfessional />} />
          <Route path="/resources/e-counselling" element={<ResourceECounselling />} />
          <Route path="/resources/ptsd" element={<ResourcePTSD />} />
          <Route path="/resources/grief" element={<ResourceGrief />} />
          <Route path="/resources/depression" element={<ResourceDepression />} />
          <Route path="/resources/anxiety" element={<ResourceAnxiety />} />
          <Route path="/resources/addiction" element={<ResourceAddiction />} />
          <Route path="/resources/attempt-survivors" element={<ResourceAttemptSurvivors />} />
          <Route path="/resources/bereaved-support" element={<ResourceBereavedSupport />} />
          <Route path="/resources/organizations" element={<ResourceOrganizations />} />
        </Route>
      </Routes>
    </>
  );
}