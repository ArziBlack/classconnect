import React from "react";
import "./breadCrumb.css";
import { NavLink, Outlet } from "react-router-dom";

interface BreadCrumbProps {
  links: { to: string; label: string }[];
}

export const BreadCrumb: React.FC<BreadCrumbProps> = ({ links }) => {
  return (
    <div className="breadCrumb">
      <div className="breadCrumb-container">
        <div className="breadCrumb-header">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className="breadCrumb-link text-[14px]"
              end
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
};
