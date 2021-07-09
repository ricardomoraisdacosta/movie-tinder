import React from "react";
import MainLogo from "../../assets/main.png";
import SearchLogo from "../../assets/search.png";
import FavoritesLogo from "../../assets/favorites.png";
import ShameLogo from "../../assets/shame.png";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBarWrapper = styled.div`
  background-color: black;
  display: flex;
  padding: 2rem;
  justify-content: space-between;
`;

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavLink
        activeStyle={{
          borderBottomColor: "white",
          borderBottomStyle: "solid",
          borderBottomWidth: "4px",
        }}
        to="/"
        exact={true}
      >
        <img alt="Main Page" src={MainLogo} />
      </NavLink>
      <NavLink
        activeStyle={{
          borderBottomColor: "white",
          borderBottomStyle: "solid",
          borderBottomWidth: "4px",
        }}
        to="/favorites"
      >
        <img alt="Favorites" src={FavoritesLogo} />
      </NavLink>
      <NavLink
        activeStyle={{
          borderBottomColor: "white",
          borderBottomStyle: "solid",
          borderBottomWidth: "4px",
        }}
        to="/shame"
      >
        <img alt="Shame Page" src={ShameLogo} />
      </NavLink>
      <NavLink
        activeStyle={{
          borderBottomColor: "white",
          borderBottomStyle: "solid",
          borderBottomWidth: "4px",
        }}
        to="/search"
      >
        <img alt="Search" src={SearchLogo} />
      </NavLink>
    </NavBarWrapper>
  );
};

export default NavBar;
