import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import {
  faHome,
  faSquarePlus,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div>
      <NavCont>
        <ContIconNav>
          <NavLink to="/">
            <FontAwesomeIcon icon={faHome} size="xl" color="white" />
            <p>Home</p>
          </NavLink>
        </ContIconNav>
        <ContIconNav>
          <NavLink to="/additem">
            <FontAwesomeIcon icon={faSquarePlus} size="xl" color="white" />
            <p>Add Items</p>
          </NavLink>
        </ContIconNav>
        <ContIconNav>
          <NavLink to="/calendar">
            <FontAwesomeIcon icon={faCalendarDays} size="xl" color="white" />
            <p>List</p>
          </NavLink>
        </ContIconNav>
      </NavCont>
      <Outlet />
    </div>
  );
};

export default Nav;

const NavCont = styled.nav`
  width: 100%;
  padding: 5px;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #8b0505;
`;

const ContIconNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: white;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: white;
    text-decoration: none;
  }
`;
