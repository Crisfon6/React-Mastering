import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

// Components
export const Logo = () => (
    <div className="flex shrink-0 items-center">
      <img
        className="h-8 w-auto"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
      />
    </div>
  );
  
export const NavLinkCustom = ({ to, current, children }: { to: string; current?: boolean; children: React.ReactNode }) => (
    <NavLink
      to={to}
      className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-medium ${
        isActive 
          ? "bg-gray-900 text-white" 
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      }`}
      aria-current={current ? "page" : undefined}
    >
      {children}
    </NavLink>
  );
  
export const ProfileButton = () => (
    <button
      type="button"
      className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
      id="user-menu-button"
      aria-expanded="false"
      aria-haspopup="true"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">Open user menu</span>
      <img
        className="size-8 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </button>
  );
 
export const DropdownMenu = ({ onClose }: { onClose: () => void }) => (
    
    <div
      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabIndex={-1}
    >
      <Link
        to="/login"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-2"
        onClick={onClose}
      >
        Sign out
      </Link>
    </div>
  );
  
  // Icons
export const MenuIcon = ({ className }: { className: string }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
  
export const CloseIcon = ({ className }: { className: string }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
  
export const NotificationIcon = () => (
    <svg
      className="size-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
      />
    </svg>
  );
  