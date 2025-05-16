import { useContext, useEffect, useRef, useState } from "react";
import { Logo } from "./Components";
import {
  DropdownMenu,
  NotificationIcon,
  ProfileButton,
  NavLinkCustom,
} from "./Components";
import { UserContext, UserContextType } from "../context/UserContext";

export const NavBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, setUser } = useContext(UserContext) as UserContextType;

  const handleClickOutsideMenu = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuVisible(false);
    }
  };

  const handleClickOutsideDropdown = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideMenu);
    document.addEventListener("mousedown", handleClickOutsideDropdown);

    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, []);

  const renderNavLinks = () => (
    <div className="flex space-x-4">
      <NavLinkCustom to="/">Home</NavLinkCustom>
      <NavLinkCustom to="/about">About</NavLinkCustom>
      <NavLinkCustom to="/login">Login</NavLinkCustom>
    </div>
  );

  const renderNotificationButton = () => (
    <button
      type="button"
      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View notifications</span>
      <NotificationIcon />
    </button>
  );

  const renderProfileDropdown = () => (
    <div ref={dropdownRef} className="relative ml-3">
      <div onClick={() => setIsMenuVisible(!isMenuVisible)}>
        <ProfileButton />
      </div>

      {isMenuVisible && (
        <DropdownMenu
          onClose={() => {
            setIsMenuVisible(false);
            setUser(null);
          }}
        />
      )}
    </div>
  );

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Logo />
            <div className="hidden sm:ml-6 sm:block">{renderNavLinks()}</div>
          </div>
          {user && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {renderNotificationButton()}
              {renderProfileDropdown()}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
