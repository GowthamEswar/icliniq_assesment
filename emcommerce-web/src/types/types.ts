// types.ts

export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    __v: number; // Example field, adjust as per your actual data structure
  }
  
  export interface CartItem {
    _id: string; // Assuming each cart item has its own unique ID
    productId: string; // ID of the product in the cart
    quantity: number;
    __v: number; // Example field, adjust as per your actual data structure
  }
  