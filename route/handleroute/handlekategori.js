const modelkategori = require('../../models').kategori;
const { codesuccess, codeErrorclient} = require('../statuscode');

const handlekategorigetall = async(req, res) => {
    const kategori = await modelkategori.findAll();
    const response = {
        status: "SUCCESS",
        message: "Get All Kategori",
        total: {
            total: kategori.length
        },
        data: kategori
    }
    res.status(200).json(response)
    return
}

const handlekategorigetid = async(req, res) => {
    const kategoriid = await modelkategori.findAll({
        where: {
            id : req.params.id
        }
    });
    let response = {};

    if(kategoriid.length == 0) {
        response = {
            status: "SUCCESS",
            message: "Data not Found"
        }
    } else {
        response = {
            status: "SUCCESS",
            message: "Get Detail kategori",
            data: kategoriid
        }
    }
    res.status(200).json(response)
    return
}

const handlecreatekategori = async(req, res) => {
    let response = {};
    const body = req.body;
      try {
          const createkategori = await modelkategori.create({
              nama: body.nama,
              deskripsi: body.deskripsi
          });
          
          response = {
              status: "SUCCESS",
              message: "Create Kategori",
              data: createkategori
          }
      } catch (error) {
          res.status(codeErrorclient)
          response ={
              status : "ERROR",
              message : error.message 
          }
      }
      res.status(codesuccess).json(response)
 }

const handlupdateekategori = async(req, res) => {
    let response = {};
    
    const kategori = await modelkategori.findOne({
        where: {
            id: req.params.id
        }
    });

    if(!kategori) return res.status(404).json({message: "id tidak ditemukan"});
    const body = req.body;
 
    const nama = body.nama;
    const deskripsi = body.deskripsi;


    const updtkategori = await modelkategori.update(
        {
           nama: nama,
           deskripsi: deskripsi
        }, {
            where: {
                id : req.params.id
            }
        }
    );
    if(updtkategori) {
        response = {
            status: "SUCCESS",
            message: "berhasil Update kategori"
        }
        return res.status(codesuccess).json(response); 
    } 
 }

const handledeletekategori = async(req, res) => {
    try {
        const deletekategori = await modelkategori.destroy(
            {
                where: {
                    id : req.params.id
                }
            }
        );   
        if(deletekategori) {
            response = {
                status: "SUCCESS",
                message: "Delete todo"
            }
            return res.status(codesuccess).json(response); 
        } else {
            return res.status(codeErrorclient).json({ error: 'id tidak ditemukan' });
        }
    
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    handlekategorigetall,
    handlekategorigetid,
    handlecreatekategori,
    handlupdateekategori,
    handledeletekategori
}