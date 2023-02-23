import { useState } from "react";
import "./Nav.css";
import Prueba from "../prueba/Prueba";
import OffcanvasBody from "./offcanvasBody/OffcanvasBody";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Dropdown,
  Offcanvas,
  Row,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBriefcase } from "@fortawesome/free-solid-svg-icons";

function NavBarApp2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className='--ct-bg-topbar-dark' bg='dark' expand='lg'>
      <Container>
        <Navbar.Brand
          style={{ fontWeight: "bold", fontStyle: "italic" }}
          className='text-light'
          href='#home'
        >
          UBOLD
        </Navbar.Brand>
        <button onClick={handleShow} className='ms-auto toggle-button'>
          <FontAwesomeIcon icon={faBars} inverse />
        </button>
        <Nav className='mr-auto'>
          <Dropdown>
            <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
              <span>Create New</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Container>
                <Dropdown.Item className='ps-0' href='#action/1'>
                  <Container>
                    <Row>
                      <Col xs={1}>
                        <FontAwesomeIcon icon={faBriefcase} />
                      </Col>
                      <Col xs={3}>New Projects</Col>
                    </Row>
                  </Container>
                </Dropdown.Item>
                <Dropdown.Item className='ps-0' href='#action/2'>
                  <Container>
                    <Row>
                      <Col xs={1}>
                        <FontAwesomeIcon icon={faBriefcase} />
                      </Col>
                      <Col xs={3}> Creater Users</Col>
                    </Row>
                  </Container>
                </Dropdown.Item>
                <Dropdown.Item className='ps-0' href='#action/3'>
                  <Container>
                    <Row>
                      <Col xs={1}>
                        <FontAwesomeIcon icon={faBriefcase} />
                      </Col>
                      <Col xs={3}>Revenue Report</Col>
                    </Row>
                  </Container>
                </Dropdown.Item>
                <Dropdown.Item className='ps-0' href='#action/4'>
                  <Container>
                    <Row>
                      <Col xs={1}>
                        <FontAwesomeIcon icon={faBriefcase} />
                      </Col>
                      <Col xs={3}>Settings</Col>
                    </Row>
                  </Container>
                </Dropdown.Item>
                <Dropdown.Item className='ps-0' href='#action/5'>
                  <Container>
                    <Row>
                      <Col xs={1}>
                        <FontAwesomeIcon icon={faBriefcase} />
                      </Col>
                      <Col xs={3}> Help & Support</Col>
                    </Row>
                  </Container>
                </Dropdown.Item>
              </Container>
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
        <NavDropdown
          className='text-light'
          title='Menú'
          id='basic-nav-dropdown'
        >
          <Dropdown.Menu key='down-centered' className='mega-menu'>
            <div className='row'>
              <div className='col-sm-4'>
                <h5>Categorías</h5>
                <Dropdown.Item href='#action/1'>Categoría 1</Dropdown.Item>
                <Dropdown.Item href='#action/2'>Categoría 2</Dropdown.Item>
                <Dropdown.Item href='#action/3'>Categoría 3</Dropdown.Item>
              </div>
              <div className='col-sm-4'>
                <h5>Productos</h5>
                <Dropdown.Item href='#action/4'>Producto 1</Dropdown.Item>
                <Dropdown.Item href='#action/5'>Producto 2</Dropdown.Item>
                <Dropdown.Item href='#action/6'>Producto 3</Dropdown.Item>
              </div>
              <div className='col-sm-4'>
                <h5>Contacto</h5>
                <Dropdown.Item href='#action/7'>Teléfono</Dropdown.Item>
                <Dropdown.Item href='#action/8'>Email</Dropdown.Item>
              </div>
            </div>
          </Dropdown.Menu>
        </NavDropdown>
        <Prueba></Prueba>
        <Navbar.Toggle aria-controls='navbar' />
        <Navbar.Collapse id='navbar'>
          <Nav className='me-auto'></Nav>
        </Navbar.Collapse>
      </Container>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <OffcanvasBody></OffcanvasBody>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default NavBarApp2;
