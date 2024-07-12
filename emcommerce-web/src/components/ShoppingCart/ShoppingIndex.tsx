// CartList.tsx
import React, { useEffect, useState } from 'react';
import CartList from "./CartList";

interface Cart {
    _id: string;
    productId: string;
    quantity: number;
}

const CartIndex: React.FC = () => {

    const [carts, setCarts] = useState<Cart[]>([]);

    useEffect(() => {
        fetchCarts();
    }, []);

    const fetchCarts = async () => {
        try {
            const response = await fetch('https://my-node-app-xgpf.onrender.com/api/carts');
            const data = await response.json();
            console.log("data------->", data)
            setCarts(data.data); // Assuming API returns an array of carts
        } catch (error) {
            console.error('Error fetching carts:', error);
        }
    };

    const handleDeleteCart = async (productId: string) => {
        try {
            const response = await fetch('https://my-node-app-xgpf.onrender.com/api/carts/remove', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId }),
            });
            if (response.ok) {
                fetchCarts(); // Refresh the product list after adding a new product
            } else {
                console.error('Failed to remove product');
            }
        } catch (error) {
            console.error('Error remove product:', error);
        }
    };

    return (
        <div>
            {/* <CartForm onAddCart={handleAddCart} /> */}
            <CartList carts={carts} onDeleteCart={handleDeleteCart} />
        </div>
    );
};

export default CartIndex;
