const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const passportLocalMongoose = require('passport-local-mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const reviewSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    name: {
        type: String,
        required: 'Please supply a name',
        trim: true
    },
    email: {
        type: String,
        required: 'Please supply an email address',
        lowercase: true,
        trim: true     
    },
    phone: {
        type: Number,
        required: 'Please supply a phone number',
        trim: true
    },
    review: {
       type: String,
       required: 'Please supply a review',
       trim: true
    }
},
{
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
});

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Review', reviewSchema);