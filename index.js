const express = require('express');
const dotenv = require('dotenv');

const { getkategoriall, getkategoriid, createkategori, updatekategori, deletekategori } = require('./route/routekategori');

const { gettodoall, gettodoid, createtodo, deletetodo } = require('./route/routetodo');

const { getusersall, getusersid, createusers, deleteusers, updateusers } = require('./route/routeuser');

const { login } = require('./route/login');

dotenv.config();

const app = express();
app.use(express.json());

const port = 5000;

// untuk login
app.use(login);

// untuk menggunakan table user
app.use(getusersall, getusersid, createusers, updateusers, deleteusers);

// untuk menggunakan table kategori
app.use(getkategoriall, getkategoriid, createkategori, updatekategori, deletekategori);

// untuk menggunakan table todo
app.use(gettodoall, gettodoid, createtodo, deletetodo);

// app.use(router);




app.listen(port, () =>{
    console.log(`Aplikasi anda berjalan di port : ${port}`);
})