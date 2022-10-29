import React, { useState } from "react";
import { Collapse, Button, Row, ListGroupItem, ListGroup } from "reactstrap";

function CollapseOption(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <div className="text-center, mt-2 mb-2">
      <Button className="my-2" color="primary" type="button" onClick={toggle}>
        Modelos inmobiliarios
      </Button>
      <Collapse isOpen={isOpen} {...args} trigger="hover focus">
      <Row className="mt-3">
      <ListGroup flush>
        <ListGroupItem
          href="#"
          tag="a"
        >
          Alquiler natural
        </ListGroupItem>
        <ListGroupItem
          href="#"
          tag="a"
        >
        Alquiler jurídico
        </ListGroupItem>
        <ListGroupItem
          href="#"
          tag="a"
        >
          Compra / venta
        </ListGroupItem>
      </ListGroup>
      </Row>
      </Collapse>
    </div>
    </>

          // <Col xs="6">
          //   <a
              
          //     className="text-black"
          //     href="#pablo"
          //     onClick={(e) => e.preventDefault()}
          //   >
          //     <h4>Contrato de alquiler residencial</h4>
          //   </a>
          // </Col> 
  );
}

export default CollapseOption;