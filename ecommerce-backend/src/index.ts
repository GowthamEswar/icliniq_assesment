import express from 'express';
import connectDB from './config/database';
import productRoutes from './modules/product/product.routes';
import cartRoutes from './modules/cart/cart.routes';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

connectDB();

// @ts-ignore
app.use(express.json());
app.use(cors())
dotenv.config();

app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// export default app;
