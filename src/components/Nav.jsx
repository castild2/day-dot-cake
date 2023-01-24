import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Outlet } from "react-router-dom";
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
          <FontAwesomeIcon icon={faHome} size="xl" />
          <p>Home</p>
        </ContIconNav>
        <ContIconNav>
          <FontAwesomeIcon icon={faSquarePlus} size="xl" />
          <p>Add Items</p>
        </ContIconNav>
        <ContIconNav>
          <FontAwesomeIcon icon={faCalendarDays} size="xl" />
          <p>Calendar</p>
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
  background-color: azure;
`;

const ContIconNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
