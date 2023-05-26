const express = require('express');
const { handlekategorigetall, handlekategorigetid, handlecreatekategori, handlupdateekategori, handledeletekategori } = require('./handleroute/handlekategori');

const app = express();

const getkategoriall = app.get("/kategori", handlekategorigetall);

const getkategoriid = app.get("/kategori/:id", handlekategorigetid);

const createkategori = app.post("/kategori", handlecreatekategori);
 
 const updatekategori = app.put("/kategori/:id", handlupdateekategori);
 
 const deletekategori = app.delete("/kategori/:id", handledeletekategori);

module.exports = {
    getkategoriall,
    getkategoriid,
    createkategori,
    updatekategori,
    deletekategori
}
