const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConditionSchema = new Schema(
	{
		date: {type: Date, required: true},
		temperature: {type: Number, required: true},
		hummidity: {type: Number, required: true},
		pressure: {type: Number, required: true},
		other: {type: String},
	},
	{
		versionKey: false,
	},
)

module.exports = mongoose.model('condition', ConditionSchema)
