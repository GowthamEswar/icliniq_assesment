// modules/product/product.routes.ts
import express from 'express';
import productController from './controller/product.controller';
import { validateBody } from '../common/middleware/validate';
import { productSchema, productUpdateSchema } from './validation/product.validation';
import productMiddleware from '../common/middleware/query';

const router = express.Router();

router.post('/', validateBody(productSchema), productController.addProduct);
router.get('/', productMiddleware, productController.getAllProducts);
router.get('/:productId', productController.getProductById);
router.put('/:productId', validateBody(productUpdateSchema), productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);

export default router;
