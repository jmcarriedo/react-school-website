import React from 'react';
import {useCart} from 'react-use-cart';

const Itemcard = (props) => {
    const {addItem} = useCart();

    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="p-0 overflow-hidden h-100 shadow">
                <img src={props.img} class="card-img-top img-fluid" alt=""/>
                    <div class="card-body text-center">
                        <p class="card-title">{props.title}</p>
                        <h5 class="card-text">Php {props.price}</h5>
                        <p class="card-text">{props.desc}</p>
                        <button class="btn btn-success" style={{background:'dodgerblue'}}
                        onClick={() => addItem(props.item)}>Add to Cart</button>
                    </div>
            </div> 
        </div>
    )
}

export default Itemcard;
