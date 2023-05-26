const modeltodo = require('../../models').todo;
const kategoris = require('../../models').kategori;
const { codesuccess, codeErrorclient} = require('../statuscode');

const handletodogetall = async(req, res) => {
    const todo = await modeltodo.findAll({
        include :{
            model: kategoris
        }
    });
    
    const response = {
        status: "SUCCESS",
        message: "Get All todo",
        total: {
            total: todo.length,
        },
        data: todo
    }
    res.status(200).json(response)
    return
}

const handletodogetid = async(req, res) => {
    const todoid = await modeltodo.findAll({
        where: {
            id : req.params.id
        },
        include :{
            model: kategoris
        }
    });
    let response = {};

    if(todoid.length == 0) {
        response = {
            status: "SUCCESS",
            message: "Data not Found"
        }
    } else {
        response = {
            status: "SUCCESS",
            message: "Get Detail todo",
            data: todoid
        }
    }
    res.status(200).json(response)
    return
}

const handletodocreate = async(req, res) => {
    let response = {};
    const body = req.body;
      try {
          const createtodo = await modeltodo.create({
              judul: body.judul,
              konten: body.konten,
              kategori_id: body.kategori_id
          });
          
          response = {
              status: "SUCCESS",
              message: "Create Todo",
              data: createtodo
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

const handletodoupdate = async(req, res) => {
    let response = {};
    
    const todos = await modeltodo.findOne({
        where: {
            id: req.params.id
        }
    });

    if(!todos) return res.status(404).json({message: " tidak ada data"});
    const body = req.body;
 
    const judul = body.judul;
    const konten = body.konten;
    const kategori_id = body.kategori_id;

    const updatetodo = await modeltodo.update(
        {
           judul : judul,
            konten : konten,
            kategori_id : kategori_id,
        }, {
            where: {
                id : req.params.id
            }
        }
    );
    if(updatetodo) {
        response = {
            status: "SUCCESS",
            message: "berhasil Update todo"
        }
        return res.status(codesuccess).json(response); 
    } 
 }

const handletododelete = async(req, res) => {
    try {
        const deletetodo = await modeltodo.destroy(
            {
                where: {
                    id : req.params.id
                }
            }
        );   
        if(deletetodo) {
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
    handletodogetall,
    handletodogetid,
    handletodocreate,
    handletodoupdate,
    handletododelete
}