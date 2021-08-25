import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {useCart} from 'react-use-cart';
import './Shop.css';

function Confirmation() {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    emptyCart,
  } = useCart();

  return (
    <>
      <div
        className="seashell d-flex justify-content-center"
      >
        <Button variant="primary" onClick={handleShow}>
          Order
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}  className="seashell">
        <Modal.Header>
          <Modal.Title>Order Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for your order.</p>
          <p>Please wait for an email from the School for further instructions regarding your order and payment.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose, emptyCart}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Confirmation