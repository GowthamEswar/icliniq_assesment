import React, { useState } from 'react';

// interface Props {
//     onAddProduct: (newProduct: Product) => Promise<void>; // Update type to expect a promise
// }

interface Product {
    _id?: string;
    name: string;
    price: number;
    description: string;
}

const ProductForm: React.FC<any> = ({ onAddProduct }) => {
    const [cart, setProduct] = useState<Product>({
        name: '',
        price: 0,
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await onAddProduct(cart);
            // Optionally, reset the form fields after submission
            setProduct({
                name: '',
                price: 0,
                description: ''
            });
        } catch (error) {
            console.error('Error adding cart:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={cart.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Price:
                <input
                    type="number"
                    name="price"
                    value={cart.price}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    required
                />
            </label>
            <br />
            <label>
                Description:
                <textarea
                    name="description"
                    value={cart.description}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
