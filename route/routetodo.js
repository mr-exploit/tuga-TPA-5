const express = require('express');
const { handletodogetall, handletodogetid, handletodocreate, handletodoupdate, handletododelete } = require('./handleroute/handletodo');
const { auth } = require('../middleware/middleware');

const app = express();


const gettodoall = app.get("/todo", auth, handletodogetall);

const gettodoid = app.get("/todo/:id", auth, handletodogetid);

const createtodo = app.post("/todo", handletodocreate);

const updatetodo = app.put("/todo/:id", handletodoupdate);

const deletetodo = app.delete("/todo/:id", handletododelete);


module.exports = {
    gettodoall,
    gettodoid,
    createtodo,
    updatetodo,
    deletetodo
}
