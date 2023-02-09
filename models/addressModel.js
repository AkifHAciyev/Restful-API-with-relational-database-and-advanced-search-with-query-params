const { Schema, default: mongoose } = require('mongoose');

const addressShema = Schema({
	streetName: String,
	city: String,
	region: String,
	postalCode: String,
});

const address = mongoose.model('Address', addressShema);

module.exports = {
	address,
};
