const express = require('express');
const { handleuserall, handleuserid, handlecreate, handleupdate, handledelete } = require('./handleroute/handleuser');

const app = express();

const get = app.get("/", (req, res) => {
    res.send("hallo anda berhasil menggunakan endpoint ini");
});

const getusersall = app.get("/users", handleuserall);



const getusersid = app.get("/users/:id", handleuserid);

const createusers = app.post("/users", handlecreate);

const updateusers = app.put("/users/:id", handleupdate);

const deleteusers = app.delete("/users/:id", handledelete);

module.exports = {
    get,
    getusersall,
    getusersid,
    createusers,
    updateusers,
    deleteusers
}
