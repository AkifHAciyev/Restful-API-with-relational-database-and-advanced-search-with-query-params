const { Schema, default: mongoose } = require('mongoose');

const buyerSchema = Schema({
	buyerName: String,
	phoneNumber: Number,
	buyerAddress: {
		type: 'ObjectId',
		ref: 'Address',
	},
});

const buyer = mongoose.model('Buyer', buyerSchema);

module.exports = {
	buyer,
};
