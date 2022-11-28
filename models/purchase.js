
const { Schema, model } = require('mongoose');

const Purchasechema = Schema({
    model: {
        type: Schema.Types.ObjectId,
        ref: 'Model',
        required: true
    },
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    qty: {
        type: Number,
        default: 0
    },
    date: {
        type: String
    },
    pymtmethod: {
        type: String
    },
})

PurchaseSchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();

    return data;
}


module.exports = model('Purchase', PurchaseSchema);