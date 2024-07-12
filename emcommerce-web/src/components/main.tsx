// CartList.tsx
import React, { useState } from 'react';
import ProductIndex from "./products/ProductIndex";
import CartIndex from './ShoppingCart/ShoppingIndex';


const MainApp = () => {

    const [show, setShow] = useState<boolean>(false);

    return (
        <div>
            <button className='add-button' onClick={() => setShow(!show)}>Go To {show?  'Cart': 'Product'}</button>
           {show ? <ProductIndex /> : <CartIndex />}
        </div>
    );
};

export default MainApp;
