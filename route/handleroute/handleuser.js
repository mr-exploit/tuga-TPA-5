
const usermodel = require('../../models').users;
const { codesuccess, codeErrorclient} = require('../statuscode');

const handleuserall = async (req, res) => {
    const user = await usermodel.findAll();
    const response = {
        status: "SUCCESS",
        message: "Get All Users",
        total: {
            total: user.length
        },
        data: user
    }
    res.status(200).json(response)
    return
};

const handleuserid = async(req, res) => {
    const userid = await usermodel.findAll({
        where: {
            id : req.params.id
        }
    });
    let response = {};

    if(userid.length == 0) {
        response = {
            status: "SUCCESS",
            message: "Data tidak ditemukan"
        }
    } else {
        response = {
            status: "SUCCESS",
            message: "melihat detail users",
            data: userid
        }
    }
    res.status(200).json(response)
    return
}

const handlecreate = async(req, res) => {
    let response = {};
    const body = req.body;
 
     try {
         const createusers = await usermodel.create({
             username: body.username,
             email: body.email,
             password: body.password
         });
         
         response = {
             status: "SUCCESS",
             message: "Create Users",
             data: createusers
         }
     } catch (error) {
         res.status(codeErrorclient)
         response ={
             status : "ERROR",
             message : error.message 
         }
     }
     res.status(codesuccess).json(response)
     return
 }

 const handleupdate =  async(req, res) => {
    let response = {};
    
    const users = await usermodel.findOne({
        where: {
            id: req.params.id
        }
    });

    if(!users) return res.status(404).json({message: " tidak ada data"});
    const body = req.body;
 
    const username = body.username;
    const email = body.email;
    const password = body.password;

    const updateusers = await usermodel.update(
        {
            username : username,
            email : email,
            password : password,
        }, {
            where: {
                id : req.params.id
            }
        }
    );
    if(updateusers) {
        response = {
            status: "SUCCESS",
            message: "berhasil Update Users"
        }
        return res.status(codesuccess).json(response); 
    } 
 }

 const handledelete = async(req, res) => {
    try {
        const deleteuser = await usermodel.destroy(
            {
                where: {
                    id : req.params.id
                }
            }
        );   
        if(deleteuser) {
            response = {
                status: "SUCCESS",
                message: "Delete Users"
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
    handleuserall,
    handleuserid,
    handlecreate,
    handleupdate,
    handledelete
}