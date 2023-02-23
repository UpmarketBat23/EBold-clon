import React from "react";
import "./Nav.css";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCog,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Prueba from "../prueba/Prueba";

function NavBarApp() {
  return (
    <Navbar bg='dark' expand='lg'>
      <Navbar.Brand href='#home'>ubold</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Dropdown>
            <Dropdown.Toggle variant='light' id='dropdown-basic'>
              Create New
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href='#action/1'>New Projects</Dropdown.Item>
              <Dropdown.Item href='#action/2'>Creater Users</Dropdown.Item>
              <Dropdown.Item href='#action/3'>Revenue Report</Dropdown.Item>
              <Dropdown.Item href='#action/4'>Settings</Dropdown.Item>
              <Dropdown.Item href='#action/5'>Help & Support</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant='light' id='dropdown-basic'>
              Mega Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href='#action/1'>Action 1</Dropdown.Item>
              <Dropdown.Item href='#action/2'>Action 2</Dropdown.Item>
              <Dropdown.Item href='#action/3'>Action 3</Dropdown.Item>
              <Dropdown.Item href='#action/1'>Action 1</Dropdown.Item>
              <Dropdown.Item href='#action/2'>Action 2</Dropdown.Item>
              <Dropdown.Item href='#action/3'>Action 3</Dropdown.Item>
              <Dropdown.Item href='#action/1'>Action 1</Dropdown.Item>
              <Dropdown.Item href='#action/2'>Action 2</Dropdown.Item>
              <Dropdown.Item href='#action/3'>Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Prueba className='prueba'></Prueba>
        <Nav>
          <Nav.Link href='#notifications'>
            <FontAwesomeIcon className='icon' icon={faBell} />
          </Nav.Link>
          <Nav.Link href='#messages'>
            <FontAwesomeIcon className='icon' icon={faEnvelope} />
          </Nav.Link>
          <Nav.Link href='#settings'>
            <FontAwesomeIcon className='icon' icon={faCog} />
          </Nav.Link>
          <Nav.Link href='#profile'>
            <FontAwesomeIcon className='icon' icon={faUser} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarApp;
