const express = require('express');
const { handlekategorigetall, handlekategorigetid, handlecreatekategori, handlupdateekategori, handledeletekategori } = require('./handleroute/handlekategori');
const { auth } = require('../middleware/middleware');

const app = express();

const getkategoriall = app.get("/kategori",  handlekategorigetall);

const getkategoriid = app.get("/kategori/:id", handlekategorigetid);

const createkategori = app.post("/kategori", auth, handlecreatekategori);
 
 const updatekategori = app.put("/kategori/:id", auth, handlupdateekategori);
 
 const deletekategori = app.delete("/kategori/:id", auth, handledeletekategori);

module.exports = {
    getkategoriall,
    getkategoriid,
    createkategori,
    updatekategori,
    deletekategori
}
