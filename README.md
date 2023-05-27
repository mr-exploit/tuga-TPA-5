# tugas-TPA-5
Building Web Service &amp; RESTful API for ToDoList with Express and Sequalize

pertama untuk bisa akses harus memasukkan endpoint berikut https://tugas-tpa-5-production.up.railway.app/
hasilnya akan seperti gambar dibawah


![image](https://github.com/mr-exploit/tugas-TPA-5/assets/65493711/aa1b329d-6c97-46c7-b343-c93dc19d1b6a)

selanjutnya untuk mengetes API silahkan dicoba 

## Authorization
ada beberapa API yang minta authorization :
1. getUserall = https://tugas-tpa-5-production.up.railway.app/users
2. getUserid = https://tugas-tpa-5-production.up.railway.app/users/{id_users}
3. updateusers = https://tugas-tpa-5-production.up.railway.app/users/{id_users}
4. deleteusers = https://tugas-tpa-5-production.up.railway.app/users/{id_users}
5. createtodo = https://tugas-tpa-5-production.up.railway.app/todo
6. updatetodo = https://tugas-tpa-5-production.up.railway.app/todo/{id_todo}
7. deletetodo = https://tugas-tpa-5-production.up.railway.app/todo/{id_todo}
8. createkategori = https://tugas-tpa-5-production.up.railway.app/kategori
9. updatekategori = https://tugas-tpa-5-production.up.railway.app/kategori/{id_kategori}
10. deletekategori = https://tugas-tpa-5-production.up.railway.app/kategori/{id_kategori}

Request :
- Header :
    - "Authorization" : "Bearer <token>"

## LOGIN

Request :

- Method : POST
- Endpoint : https://tugas-tpa-5-production.up.railway.app/login
- Header :
      - Content-Type: application/json
      - Accept: application/json

- Body :
```json  
{
    "email": "admin@gmail.com",
    "password": "Kucing12"
}
```

Response :
```json  
{
    "token": "<token>"
}
```

![image](https://github.com/mr-exploit/tugas-TPA-5/assets/65493711/4de22446-ae85-4716-9ad0-d1a689d38a75)


## SIGNUP

Request :

- Method : POST
- Endpoint : https://tugas-tpa-5-production.up.railway.app/signup

- Header :
      - Content-Type: application/json
      - Accept: application/json

- Body :
```json  
{
    "username": "string",
    "email": "string",
    "password": "string"
}
```

Response :
```json  
{
  "status": "SUCCESS",
    "message": "Create Users",
    "data": {
      "id" : "integer",
      "username": "string",
      "email": "string",
      "password": "string"
    }
}
```

![image](https://github.com/mr-exploit/tugas-TPA-5/assets/65493711/4a094882-3e1d-4755-9230-51c1c5f48c1e)

  
# Authorization
## Create todo
    
Request :

- Method : POST
- Endpoint : https://tugas-tpa-5-production.up.railway.app/todo
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer <token>
    
- gambar masukkan token 
![image](https://github.com/mr-exploit/tugas-TPA-5/assets/65493711/62e8fc93-ca7d-474e-a95b-e3c3135e61da)

- Body : 
```json
     {
        "judul": "String",
        "konten": "String",
        "kategori_id": "integer"
    }
```
![image](https://github.com/mr-exploit/tugas-TPA-5/assets/65493711/ea168f26-8d59-4c63-ba76-3ec19b60b361)


- Response : 
    
```json
  {
    "status": "SUCCESS",
    "message": "Create Todo",
    "data": {
        "id": "string",
        "judul": "string",
        "konten": "string",
        "kategori_id": "integer",
        "updatedAt": "string",
        "createdAt": "string"
    }
  }
```
    
## Update todo
    
Request :

- Method : PUT
- Endpoint : https://tugas-tpa-5-production.up.railway.app/todo/{id_todo}
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer <token>
    
- Body : 
```json
     {
        "judul": "String",
        "konten": "String",
        "kategori_id": "integer"
    }
```
    
- Response : 
    
```json
  {
    "status": "SUCCESS",
    "message": "Berhasil Update Todo",
  }
```

## Delete todo
    
Request :

- Method : DELETE
- Endpoint : https://tugas-tpa-5-production.up.railway.app/todo/{id_todo}
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer <token>
     
- Response : 
    
```json
  {
    "status": "SUCCESS",
    "message": "Delete todo"
  }
```

    
# Not Authrozation    
## List Todo
  
Request :

- Method : GET
- Endpoint : https://tugas-tpa-5-production.up.railway.app/todo
-Header :
    - Content-Type: application/json
    - Accept: application/json
    
- Response : 
```json
  {
    "status": "SUCCESS",
    "message": "Get All todo",
    "total": {
        "total": 3
    },
    "data": [
        {
            "id": "integer",
            "judul": "string",
            "konten": "string",
            "kategori_id": "integer",
            "createdAt": "string",
            "updatedAt": "string",
            "kategori": {
                "id": "integer",
                "nama": "string",
                "deskripsi": "string",
                "createdAt": "string",
                "updatedAt": "string"
            }
        },
        {
            "id": "integer",
            "judul": "string",
            "konten": "string",
            "kategori_id": "integer",
            "createdAt": "string",
            "updatedAt": "string",
            "kategori": {
                "id": "integer",
                "nama": "string",
                "deskripsi": "string",
                "createdAt": "string",
                "updatedAt": "string"
            }
        },
    ]
  }
  ```
  - hasil gambar
    
  ![image](https://github.com/mr-exploit/tugas-TPA-5/assets/65493711/7b84cc07-87f5-4afa-98b8-a677d74c6fe9)

## Get Todo
  
Request :

- Method : GET
- Endpoint : https://tugas-tpa-5-production.up.railway.app/todo/{id_todo}
-Header :
    - Content-Type: application/json
    - Accept: application/json
    
- Response : 
```json
  {
    "status": "SUCCESS",
    "message": "Get Detail todo",
    "data": [
        {
            "id": "integer",
            "judul": "String",
            "konten": "String",
            "kategori_id": "integer",
            "createdAt": "String",
            "updatedAt": "String",
            "kategori": {
                "id": "integer",
                "nama": "String",
                "deskripsi": "String",
                "createdAt": "String",
                "updatedAt": "String"
            }
        }
  }
  ```
  - hasil gambar
    
 ![image](https://github.com/mr-exploit/tugas-TPA-5/assets/65493711/bf9ee797-79d4-43c1-9697-fc98a22a73a3)



  
  
