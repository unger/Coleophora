import { Link, createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom';
import GroupDetail from './components/GroupDetail'
import GroupList from './components/GroupList'
import CaseGroupDetail from './components/CaseGroupDetail'
import TaxonDetail from './components/TaxonDetail'
import UnsureList from './components/UnsureList';
import UnsureDetail from './components/UnsureDetail';
import CaseGroupList from './components/CaseGroupList';

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: GroupList },
      { path: "/group/:id", Component: GroupDetail },
      { path: "/cases", Component: CaseGroupList },
      { path: "/cases/:id", Component: CaseGroupDetail },
      { path: "/taxon/:slug", Component: TaxonDetail },
      { path: "/unsure", Component: UnsureList },
      { path: "/unsure/:slug", Component: UnsureDetail },
    ]
  },
],
  {
    basename: import.meta.env.BASE_URL,
  });

export default function App() {
  return <RouterProvider router={router} />;
}

function Layout() {
  return (
    <>
      <div className='navbar'>
        <Link to="/">Grupper</Link>
        <Link to="/cases">Säckar</Link>
        <Link to="/unsure">Osäkra</Link>
      </div>
      <Outlet />
      <ScrollRestoration getKey={(location, _) => {
        return location.pathname;
      }} />
    </>
  );
}
