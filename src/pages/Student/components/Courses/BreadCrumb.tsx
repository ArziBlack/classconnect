import React from "react";
import "./SettingsAdmin.css";
import { NavLink, Outlet } from "react-router-dom";

interface BreadCrumbProps {
  links: { to: string; label: string }[];
}

export const BreadCrumb: React.FC<BreadCrumbProps> = ({ links }) => {
  return (
    <div className="settings padding-container">
      <div className="settings-container">
        <div className="settings-header">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className="setting-link text-[14px]"
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
