import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="notFound-container">
      <p className="notFoud-desc">404 Page Not Found</p>
      <div className="notFound-item">
        <NavLink
          className={(navData) => (navData.isActive ? "is-active" : "none")}
          to="/"
        >
          Go Home
        </NavLink>
      </div>
    </div>
  );
};
