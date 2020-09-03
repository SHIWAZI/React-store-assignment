const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

// create Store Schema & model
const StoreSchema = new Schema({
    store_name: {
        type: String,
        unique:true,
        trim:true,
        required: [true, 'Name field is required']
    },
    store_img: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
},{timestamps:true});

const Store= mongoose.model('Store', StoreSchema);

module.exports = Store;
