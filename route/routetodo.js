const express = require('express');
const { handletodogetall, handletodogetid, handletodocreate, handletodoupdate, handletododelete } = require('./handleroute/handletodo');
const { auth } = require('../middleware/middleware');

const app = express();


const gettodoall = app.get("/todo",  handletodogetall);

const gettodoid = app.get("/todo/:id",  handletodogetid);

const createtodo = app.post("/todo", auth, handletodocreate);

const updatetodo = app.put("/todo/:id", auth, handletodoupdate);

const deletetodo = app.delete("/todo/:id", auth, handletododelete);


module.exports = {
    gettodoall,
    gettodoid,
    createtodo,
    updatetodo,
    deletetodo
}
