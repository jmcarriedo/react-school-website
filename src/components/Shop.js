import React from 'react';
import { CartProvider } from 'react-use-cart';
import Cart from '../components/Shop/Cart';
import Page from '../components/Shop/Page';

const ShopPage = () => {
    
    return (
        <div style={{
            color:'midnightblue',
        }}
        >
            <CartProvider>
                <Cart />
                <Page />
            </CartProvider>
        </div>
    )
}

export default ShopPage;
