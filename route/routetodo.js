const express = require('express');
const { handletodogetall, handletodogetid, handletodocreate, handletodoupdate, handletododelete } = require('./handleroute/handletodo');

const app = express();


const gettodoall = app.get("/todo", handletodogetall);

const gettodoid = app.get("/todo/:id", handletodogetid);

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
