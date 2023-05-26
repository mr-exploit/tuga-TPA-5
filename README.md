# tugas-TPA-5
Building Web Service &amp; RESTful API for ToDoList with Express and Sequalize

pertama untuk bisa akses harus memasukkan endpoint berikut https://tugas-tpa-5-production.up.railway.app/
hasilnya akan seperti gambar dibawah
![image](https://github.com/mr-exploit/tugas-TPA-5/assets/65493711/aa1b329d-6c97-46c7-b343-c93dc19d1b6a)

selanjutnya untuk mengetes API silahkan dicoba 

authentication

LOGIN

Request :

Method : POST
Endpoint : https://tugas-tpa-5-production.up.railway.app/login
Header :
Content-Type: application/json
Accept: application/json

Body :
{
   {
    "email": "admin@gmail.com",
    "password": "Kucing12"
  }
}
Response :
{
    "token": <token>
}
![image](https://github.com/mr-exploit/tugas-TPA-5/assets/65493711/4de22446-ae85-4716-9ad0-d1a689d38a75)

  
Authorization
Get Todo
  
Request :

Method : GET
Endpoint : https://tugas-tpa-5-production.up.railway.app/todo
Header :
Content-Type: application/json
Accept: application/json
Authorization : Bearer <token>

Response : 
  {
    "status": "SUCCESS",
    "message": "Get All todo",
    "total": {
        "total": integer
    },
    "data": [ 
          {
              "string" : integer,
              "string" : "string",
              "string" : "string",
              "string" : integer,
          }
  ]
  }
  
  ![image](https://github.com/mr-exploit/tugas-TPA-5/assets/65493711/c95e1d1a-2ec0-432e-ae0c-32473570df40)
  
  
