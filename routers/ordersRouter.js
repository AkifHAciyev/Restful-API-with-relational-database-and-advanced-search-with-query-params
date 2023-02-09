const express = require('express');
const { OrdersController } = require('../controllers/ordersController');
const orderRouter = express.Router();

orderRouter.get('/', OrdersController.getAll);
orderRouter.get('/:id', OrdersController.getById);
orderRouter.post('/', OrdersController.add);
orderRouter.delete('/:id', OrdersController.delete);
orderRouter.put('/:id', OrdersController.update);

module.exports = orderRouter;
