// ProductList.tsx
import React, { useEffect, useState } from 'react';
import ProductList from "./ProductList";
import ProductForm from './ProductForm';

interface Product {
    _id: string;
    name: string;
    price: number;
    description: string;
}

const ProductIndex: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://my-node-app-xgpf.onrender.com/api/products');
            const data = await response.json();
            setProducts(data.data); // Assuming API returns an array of products
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleAddProduct = async (newProduct: Product) => {
        setShow(false)
        try {
            const response = await fetch('https://my-node-app-xgpf.onrender.com/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });
            if (response.ok) {
                fetchProducts(); // Refresh the product list after adding a new product
            } else {
                console.error('Failed to add product');
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleDeleteProduct = async (productId: string) => {
        try {
            const response = await fetch(`https://my-node-app-xgpf.onrender.com/api/products/${productId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                fetchProducts(); // Refresh the product list after deleting a product
            } else {
                console.error('Failed to delete product');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleAddCart = async (productId: string) => {
        try {
            const response = await fetch('https://my-node-app-xgpf.onrender.com/api/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId }),
            });
            if (response.ok) {
                fetchProducts(); // Refresh the product list after adding a new product
            } else {
                console.error('Failed to add product');
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div>
            <div className='header-container'>
                <h2>Product List</h2>
                <button className='add-button' onClick={() => setShow(true)}>Add Product</button>
            </div>
            {show && <ProductForm onAddProduct={handleAddProduct} />}
            <ProductList products={products} onDeleteProduct={handleDeleteProduct} onAddProduct={handleAddCart} />
        </div>
    );
};

export default ProductIndex;
