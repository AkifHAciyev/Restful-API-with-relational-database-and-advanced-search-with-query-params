const { buyer } = require('../models/buyerModel');

const buyerController = {
	getAll: (req, res) => {
		buyer.find((err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
	add: (req, res) => {
		let newBuyer = new buyer({
			buyerName: req.body.buyerName,
			phoneNumber: req.body.phoneNumber,
			isDeleted: false,
		});

		newBuyer.save((err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
	getById: (req, res) => {
		let id = req.body.id;
		buyer.findById(id, (err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
	delete: (req, res) => {
		let id = req.body.id;
		buyer.findByIdAndUpdate(id, (err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
	update: (req, res) => {
		let id = req.body.id;
		buyer.findByIdAndUpdate(id, (err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
};

module.exports = {
	buyerController,
};
