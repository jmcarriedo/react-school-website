import React from 'react';
import {useCart} from 'react-use-cart';
import styled from 'styled-components';
import Checkout from './Checkout';

const BoxHeader = styled.div`
font-family: "Lilita One", sans-serif;
text-transform: uppercase;
letter-spacing: 3px;
padding: 100px 0 40px 0;
text-align: center;
font-size: min(max(1.7rem, 4vw), 48px);
color: #213472;
fontWeight: 800;
@media (max-width: 1024px) {
  
}
@media (max-width: 768px) {
  text-align: center;
  margin-top: -10px;
  font-size: 20px;
}
@media (max-width: 408px) {
  text-align: center;
  padding-top: 50px;
  font-size: 10px;
}
`;

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if(isEmpty) return  <BoxHeader > Your Cart Is Empty <hr style={{width:'80%', margin:'auto',}} /></BoxHeader>;

    return (
        <div className="container-fluid d-flex justify-content-centermx-auto" >
            <section className="py-4"> 
                <div className="row container justify-content-center mt-5 mx-auto">
                    <div className="col-md-8">
                        <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5>
                        <table className="ps-2 table table-light table-hover justify-content-center">
                            <tbody>
                            {items.map((item, index) => {
                                return (
                                <tr key={index} >
                                    <td className='col-lg-2'>
                                        <img src={item.img} style={{height: '7rem',}} alt=""/>
                                    </td>
                                    <td className='col-lg-3 form-text text-dark'>{item.title}</td>
                                    <td className='col-lg-1 form-text text-dark'>Php {item.price}</td>
                                    <td className='col-lg-1 form-text text-dark'>Qty: {item.quantity}</td>
                                    <td className='col-lg-5 mx-auto'>                                 
                                        <button className="col-lg-2 btn btn-outline-success ms-2 form-text" style={{fontSize:'14px'}} onClick={() => updateItemQuantity(item.id, item.quantity +1)}>+</button>
                                        <button className="col-lg-2 btn  btn-outline-secondary ms-2 form-text" style={{fontSize:'14px'}} onClick={() => updateItemQuantity(item.id, item.quantity -1)}>-</button>
                                        <button className="col-lg-6 btn btn-outline-danger ms-2 form-text" style={{fontSize:'14px'}} onClick={() => removeItem(item.id)}>Remove Item</button>
                                    </td>
                                </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4 ms-auto">
                        <div className="row mx-auto">
                            <h2>Total Price: Php {cartTotal}</h2>
                        </div>
                        <div className="col-auto mx-auto mb-3">
                            <button className="btn btn-danger" onClick={() => emptyCart()}>Clear Cart</button>
                        </div>
                        <div className="col-auto mx-auto">
                            <Checkout />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart
