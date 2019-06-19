const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const passportLocalMongoose = require('passport-local-mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const userSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    username: {
        type: String,
        required: 'Please supply a username',
        unique: true
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
    birthDate: Date,
    level: {
        type: String,
        default: 'customer'
    },
    introducer: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },
    tcCheckBox: {
        type: Boolean,
        required: 'Please agree to the terms and conditions'
    },
    admin: {
        type: Boolean,
        default: false
    },
    authenticated: {
        type: Boolean,
        default: false
    },
    authToken: {
        type: String
    },
    authTokenExpire: {
        type: Date
    },
    token: {
        type: String
    }
},
{
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
});

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
userSchema.plugin(mongodbErrorHandler);

// Generate JSON web token
userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      username: this.username,
      email: this.email,
      name: this.name,
      admin: this.admin,
      exp: parseInt(expiry.getTime() / 1000),
    }, process.env.MY_SECRET); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

userSchema.virtual('introducerInfo', {
    ref: 'User',
    localField: 'introducer', 
    foreignField: '_id'
});

module.exports = mongoose.model('User', userSchema);