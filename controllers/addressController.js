const { address } = require('../models/addressModel');

const addressController = {
	getAll: (req, res) => {
		address.find((err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
	add: (req, res) => {
		let newAdress = new address({
			streetName: req.body.streetName,
			city: req.body.city,
			region: req.body.region,
			postalCode: req.body.postalCode,
			isDeleted: false,
		});

		newAdress.save((err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
	getById: (req, res) => {
		let id = req.params.id;
		adress.findById(id, (err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
	delete: (req, res) => {
		let id = req.params.id;
		adress.findByIdAndUpdate(id, { isDeleted: true }, { new: true }, (err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
	update: (req, res) => {
		let id = req.params.id;
		adress.findByIdAndUpdate(id, { $set: req.body }, { new: true, runValidators: true }, (err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
};

module.exports = {
	addressController,
};
