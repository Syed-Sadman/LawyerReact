import React, { useState } from "react";
import img from "../components/Assets/Vector.png";
import {
  Btn,
  Burger,
  MainLogo,
  MenuItem,
  RoutingLinks,
  UnList,
} from "./Styles/Navbar.styles";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const listObj = [
    { name: "Home", path: "/ " },
    { name: "Services", path: "/services" },
    { name: "Lawyers ", path: "/lawyers" },
    { name: "Blog ", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <UnList>
        <MainLogo to="/">
          <img src={img} />
          <h6>Counsel</h6>
        </MainLogo>
        <Btn>Sign Up</Btn>

        <Burger
          onClick={handleClick}
          className={click ? "fas fa-times" : "fas fa-bars"}
        />

        <MenuItem click={click}>
          {listObj.map((value) => (
            <RoutingLinks key={value.name} to={value.path}>
              {value.name}
            </RoutingLinks>
          ))}
        </MenuItem>
      </UnList>
    </>
  );
}

export default Navbar;
