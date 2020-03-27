const mongoose = require('mongoose');

const schema = new mongoose.Schema
(
    {

    uuid: {

        type: String,
        unique: true,
        required: false,
        default: ''

    },
    vin: {

        type: String,
        unique: true,
        required: false,
        default: ''

    },
    make: {

        type: String,
        required: false,
        default: ''
    },
    model: {

        type: String,
        required: false,
        default: ''

    },
    mileage: {

        type: String,
        required: false,
        default: ''

    },
    year: {

        type: String,
        required: false,
        default: ''

    },
    price: {

        type: String,
        required: false,
        default: ''

    },
    zipCode: {

        type: String,
        required: false,
        default: ''

    },
    createDate: {

        type: String,
        required: false,
        default: ''

    },
    updateDate: {

        type: String,
        required: false,
        default: ''

    }

}, { timestamps: false });



module.exports = mongoose.model('Cars', schema);