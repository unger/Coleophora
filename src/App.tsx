import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GroupDetail from './components/GroupDetail'
import GroupList from './components/GroupList'
import CaseGroupDetail from './components/CaseGroupDetail'
import TaxonDetail from './components/TaxonDetail'
import UnsureList from './components/UnsureList';
import UnsureDetail from './components/UnsureDetail';
import CaseGroupList from './components/CaseGroupList';

function App() {

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className='navbar'>
        <Link to="/">Grupper</Link>
        <Link to="/cases">Säckar</Link>
        <Link to="/unsure">Osäkra</Link>
      </div>
      <Routes>
        <Route path="/" element={<GroupList />} />
        <Route path="/group/:id" element={<GroupDetail />} />
        <Route path="/cases" element={<CaseGroupList />} />
        <Route path="/cases/:id" element={<CaseGroupDetail />} />
        <Route path="/taxon/:slug" element={<TaxonDetail />} />
        <Route path="/unsure" element={<UnsureList />} />
        <Route path="/unsure/:slug" element={<UnsureDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
