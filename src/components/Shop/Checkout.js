import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {useCart} from 'react-use-cart';
import Confirmation from "./Confirmation";
import './Shop.css';

function Checkout() {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    items,
    totalItems,
    cartTotal,
    clearCart,
    } = useCart();
    
    if(clearCart) return <h1 className="text-center">Your order is now under process</h1>;

  return (
    <>
      <div
        className="seashell d-flex justify-content-center"
        style={{ width: "100%" }}
      >
        <Button variant="btn btn-primary" onClick={handleShow}
            style={{ width: "100%" }}
        >
          Checkout
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>You are about to order the following:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="col-12 justify-content-center container">
                <table className="table table-light table-hover justify-content-center">
                    <tbody>
                        {items.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className='col-lg-3 form-text text-dark'><img src={item.img} style={{height: '4rem'}} alt=''/></td>
                                <td className='col-lg-6 form-text text-dark'>{item.title}</td>
                                <td className='col-lg-1 form-text text-dark'>Php {item.price}</td>
                                <td className='col-lg-1 form-text text-dark'>Quantity: {item.quantity}</td>
                            </tr>
                        );
                        })}
                    </tbody>
                </table>
                <hr/>
                <h4>Total Price: Php {cartTotal}</h4>
                <hr />
            </div>
            
            <div className="col-12 justify-content-center">
                <p> Please fill up the following:</p> 
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name" />
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" />
                <label>Pupil ID</label>
                <input type="number" className="form-control" placeholder="Pupil ID" />
            </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
            <Confirmation />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Checkout;