const { Schema, model } = require('mongoose');

const ModelSchema = Schema({
    model: {
        type: String,
        required: ['model required']
    },
    imgs: {
        type: Array,
        default: ''
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    year: {
        type: Number
    },
    price: {
        type: Number,
        default: 0
    },
    description: {
        type: String
    },
    stock: {
        type: Number,
        default: 0
    }
})

ModelSchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();

    return data;
}


module.exports = model('Model', ModelSchema);