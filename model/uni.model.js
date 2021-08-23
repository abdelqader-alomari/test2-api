const mongoose = require('mongoose');

const uniSchema = new mongoose.Schema({
    web_pages: { type: Array },
    name: { type: String },
    studentEmail: { type: String },
});

const uniModel = mongoose.model('uni', uniSchema);

module.exports = uniModel