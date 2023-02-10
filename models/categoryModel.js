const { Schema, default: mongoose } = require('mongoose');

const categorySchema = Schema(
	{
		categoryName: String,
		categoryDescription: String,
	},
	{
		timestams: true,
	}
);

const category = mongoose.model('Category', categorySchema);

module.exports = {
	category,
};
