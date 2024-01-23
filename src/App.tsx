import { Link, Outlet, ScrollRestoration } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="navbar">
        <Link to="/">Grupper</Link>
        <Link to="/cases">Säckar</Link>
        <Link to="/unsure">Osäkra</Link>
      </div>
      <Outlet />
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
    </>
  );
}
