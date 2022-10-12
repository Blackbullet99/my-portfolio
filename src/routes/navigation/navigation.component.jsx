import { Outlet } from "react-router-dom";
import { Fragment, useState } from "react";
import { NavigationContainer, NavLink, ToggleMenu } from "./navigation.styles";

import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

import NavLinks from "../../components/navlinks/navlink.component";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <NavigationContainer>
        <NavLink to="/">
          <h1>Isaac Okanigbe</h1>
        </NavLink>
        <div>
          {isOpen ? (
            <ToggleMenu onClick={toggleNavButton}>
              <GrClose color="#7f5af0" />
            </ToggleMenu>
          ) : (
            <ToggleMenu onClick={toggleNavButton}>
              <GiHamburgerMenu color="#7f5af0" />
            </ToggleMenu>
          )}
          {isOpen && <NavLinks />}
        </div>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
