const express = require('express');
const { handleuserall, handleuserid, handlecreate, handleupdate, handledelete } = require('./handleroute/handleuser');
const { auth } = require('../middleware/middleware');

const app = express();

const get = app.get("/", (req, res) => {
    res.send("hallo anda berhasil menggunakan endpoint ini");
});

const getusersall = app.get("/users",  handleuserall);



const getusersid = app.get("/users/:id", auth, handleuserid);

const createusers = app.post("/users", handlecreate);

const updateusers = app.put("/users/:id", auth, handleupdate);

const deleteusers = app.delete("/users/:id", auth, handledelete);

module.exports = {
    get,
    getusersall,
    getusersid,
    createusers,
    updateusers,
    deleteusers
}
