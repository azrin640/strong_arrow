const mongoose = require('mongoose');
const schema = mongoose.Schema;
const validator = require('validator');


const serialSchema = new mongoose.Schema({
    
    serial: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true
    }, 
    market: {
       type: String,
    }
},
{
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
});

module.exports = mongoose.model('Serial', serialSchema);
