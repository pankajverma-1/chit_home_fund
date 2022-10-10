const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    fatherName: { type: String, require: true },
    address: { type: String, require: true },
    AadharNumber: { type: Number, require: true },
    AadharPhoto: {
        public_id: { type: String },
        url: { type: String },
    },
    AccountNumber: { type: Number, require: true },
    bankPassbook: {
        public_id: { type: String },
        url: { type: String },
    },
    PanNumber: { type: Number, require: true },
    panCard: {
        public_id: { type: String },
        url: { type: String },
    },
    panCard: {
        passportSizePhoto: { type: String },
        url: { type: String },
    },
    panCard: {
        signaturePhoto: { type: String },
        url: { type: String },
    },
    Mobile: { type: Number, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, required: true },
    isVerify: {
        type: Boolean,
        default: false,
    },
});

const hostSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    fatherName: { type: String, require: true },
    address: { type: String, require: true },
    AadharNumber: { type: Number, require: true },
    AadharPhoto: {
        public_id: { type: String },
        url: { type: String },
    },
    AccountNumber: { type: Number, require: true },
    bankPassbook: {
        public_id: { type: String },
        url: { type: String },
    },
    PanNumber: { type: Number, require: true },
    panCard: {
        public_id: { type: String },
        url: { type: String },
    },
    panCard: {
        passportSizePhoto: { type: String },
        url: { type: String },
    },
    panCard: {
        signaturePhoto: { type: String },
        url: { type: String },
    },
    Mobile: { type: Number, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, required: true },
    isVerify: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

const User = mongoose.model('user', userSchema);
const Host = mongoose.model('host', hostSchema);

module.exports = { User, Host };