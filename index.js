require('dotenv').config();
const addressRouter = require('./routers/addressRouter');
const categoryRouter = require('./routers/categoryRouter');
const buyerRouter = require('./routers/buyerRouter');
const orderRouter = require('./routers/ordersRouter');
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', true);
mongoose
	.connect(process.env.DB_URL)
	.then((res) => console.log('Connected'))
	.catch((err) => console.log(err));

app.get('/', (req, res) => {
	res.json('Hello world');
});

app.use('/api/address', addressRouter);
app.use('/api/category', categoryRouter);
app.use('/api/buyer', buyerRouter);
app.use('/api/orders', orderRouter);

app.listen(PORT);
