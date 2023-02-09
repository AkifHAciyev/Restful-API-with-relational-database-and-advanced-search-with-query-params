const { category } = require('../models/categoryModel');

const categoryController = {
	getAll: (res, req) => {
		category.find((err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
	add: (res, req) => {
		let newCategory = {
			categoryName: req.body.categoryName,
			categoryDescription: req.body.categoryDescription,
		};

		newCategory.save((err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
	getById: (req, res) => {
		let id = req.params.id;
		category.findById(id, (err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
	delete: (req, res) => {
		let id = req.params.id;
		category.findByIdAndUpdate(id, { isDeleted: true }, { new: true }, (err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
	update: (req, res) => {
		let id = req.params.id;
		category.findByIdAndUpdate(id, { $set: req.body }, { new: true, runValidators: true }, (err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
};

module.exports = {
	categoryController,
};
