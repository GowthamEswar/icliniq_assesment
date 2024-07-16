import express from 'express';
import connectDB from './config/database';
import productRoutes from './modules/product/product.routes';
import cartRoutes from './modules/cart/cart.routes';
import cors from 'cors';
import dotenv from 'dotenv';

// sentry
import { initSentry } from './sentry'
import * as Sentry from '@sentry/node';


const app = express();
// sentry
initSentry();

connectDB();

// @ts-ignore
app.use(express.json());
app.use(cors())
dotenv.config();

app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);

// sentry error
app.get('/error', (req, res) => {
    try {
        throw new Error('Something went wrong');
    } catch (error) {
        Sentry.captureException(error);
        res.status(500).send('Error captured');
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// export default app;
