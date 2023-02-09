const { orders } = require('../models/ordersModel');

const OrdersController = {
	getAll: (req, res) => {
		const { sort, limit, startDate, endDate } = req.query;
		if (!startDate) startDate = new Date(0);
		else startDate = new Date(startDate);

		if (!endDate) endDate = new Date();
		else endDate = new Date(endDate);

		if (sort === 'desc') {
			Order.find({
				isDeleted: false,
				date: {
					$gte: startDate,
					$lte: endDate,
				},
			})
				.populate('categoryId')
				.populate({ path: 'buyerId', populate: { path: 'buyerAdress' } })
				.exec((err, docs) => {
					if (!err) {
						res.json(docs);
					} else {
						res.status(500).json(err);
					}
				})
				.limit(limit)
				.sort({ productName: -1 });
		} else if (sort === 'asc') {
			Order.find({
				isDeleted: false,
				date: {
					$gte: startDate,
					$lte: endDate,
				},
			})
				.populate('categoryId')
				.populate({ path: 'buyerId', populate: { path: 'buyerAdress' } })
				.exec((err, docs) => {
					if (!err) {
						res.json(docs);
					} else {
						res.status(500).json(err);
					}
				})
				.limit(limit)
				.sort({ productName: 1 });
		} else {
			Order.find({ isDeleted: false })
				.populate('categoryId')
				.populate({ path: 'buyerId', populate: { path: 'buyerAdress' } })
				.exec((err, docs) => {
					if (!err) {
						res.json(docs);
					} else {
						res.status(500).json(err);
					}
				})
				.limit(limit);
		}
	},
	add: (res, req) => {
		let newProduct = new orders({
			productName: req.body.productName,
			productPrice: req.body.productPrice,
			productDescription: req.body.productDescription,
			categoryId: req.body.categoryId,
			buyerId: req.body.buyerId,
			isDeleted: false,
		});

		newProduct.save((err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
	getById: (req, res) => {
		let id = req.params.id;
		orders.findById(id, (err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
	delete: (req, res) => {
		let id = req.params.id;
		orders.findByIdAndUpdate(id, { isDeleted: true }, { new: true }, (err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
	update: (req, res) => {
		let id = req.params.id;
		orders.findByIdAndUpdate(id, { $set: req.body }, { new: true, runValidators: true }, (err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
};

module.exports = {
	OrdersController,
};
