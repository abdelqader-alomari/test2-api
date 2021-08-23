const axios = require('axios')
const uniModel = require('../model/uni.model')

const getUnis = (req, res) => {
    const url = 'http://universities.hipolabs.com/search?country=jordan'
    axios.
        get(url)
        .then(uni => res.send(uni.data))
        .catch(err => console.log(err))
}

const favUnis = (req, res) => {
    const { email } = req.query;

    uniModel.find({ studentEmail: email }, (error, data) => {
        if (error) {
            res.send(error);
        } else {

            res.send(data);
        }
    })
}

const createUnis = (req, res) => {
    const { web_pages, name, studentEmail } = req.body
    console.log(web_pages, name)
    const newUni = new uniModel({
        web_pages: web_pages,
        name: name,
        studentEmail: studentEmail,
    })
    console.log(newUni)
    newUni.save();
}

const deleteUnis = (req, res) => {
    const { id } = req.params;
    console.log(id);
    uniModel.deleteOne({ _id: id }, (error, uni) => {
    })
    uniModel.find({}, (error, data) => {

        res.send(data);
    })
};

const updateUnis = (req, res) => {
    const uniId = req.params.uni_id;
    const { web_pages, name } = req.body;
    uniModel.findByIdAndUpdate(
        { _id: uniId },
        {
            web_pages: web_pages,
            name: name,
        },
        { new: true },
        (err, data) => {
            res.send(data);
        })
}

module.exports = { getUnis, favUnis, createUnis, updateUnis, deleteUnis }