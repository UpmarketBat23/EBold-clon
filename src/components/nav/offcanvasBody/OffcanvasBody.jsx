import React from "react";
import "../Nav.css";
import { Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

function OffcanvasBody() {
  return (
    <Container>
      <Col>
        <div>
          <div style={{ fontWeight: "bold" }} variant='info'>
            <span>Categoría 1</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBriefcase} />
            <span style={{ fontWeight: "600" }} className='ms-2'>
              Perro 1
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBriefcase} />
            <span style={{ fontWeight: "600" }} className='ms-2'>
              Perro 2
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBriefcase} />
            <span style={{ fontWeight: "600" }} className='ms-2'>
              Perro 3
            </span>
          </div>
        </div>
      </Col>
      <Col>
        <div>
          <div style={{ fontWeight: "bold" }} variant='info'>
            <span>Categoría 2</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBriefcase} />
            <span style={{ fontWeight: "600" }} className='ms-2'>
              Perro 1
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBriefcase} />
            <span style={{ fontWeight: "600" }} className='ms-2'>
              Perro 2
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBriefcase} />
            <span style={{ fontWeight: "600" }} className='ms-2'>
              Perro 3
            </span>
          </div>
        </div>
      </Col>
      <Col>
        <div>
          <div style={{ fontWeight: "bold" }} variant='info'>
            <span>Categoría 3</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBriefcase} />
            <span style={{ fontWeight: "600" }} className='ms-2'>
              Perro 1
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBriefcase} />
            <span style={{ fontWeight: "600" }} className='ms-2'>
              Perro 2
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBriefcase} />
            <span style={{ fontWeight: "600" }} className='ms-2'>
              Perro 3
            </span>
          </div>
        </div>
      </Col>
    </Container>
  );
}

export default OffcanvasBody;
