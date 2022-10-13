# pagination-for-lots-of-data
Go (Gorilla/Mux) Backend Service that supports pagination for a considerable amount of data. 

## Pre-requisites

1. Go Language <br>
[Instalation](https://go.dev/doc/install) <br>
[Documentation](https://go.dev/doc/) <br>
[Totorials](https://dasarpemrogramangolang.novalagung.com/)

2. MySQL DBMS <br>
[Instalation](https://www.mysql.com/downloads/) <br>
[Documentation](https://dev.mysql.com/doc/) <br>
[Create Database Guide](https://www.inmotionhosting.com/support/server/databases/create-a-mysql-database/)

3. NPM and Node.js <br>
[Instalation](https://nodejs.org/en/download/) <br>
[Instalation Tutorials](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac) <br>
[Tutorial](https://www.hostinger.co.id/tutorial/apa-itu-npm)

4. React.js <br>
[Setup](https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm) <br>
[Starter Tutorial](https://www.w3schools.com/react/react_getstarted.asp)


5. Postman Documentation <br>
[Postman Documentation Tutorial](https://www.softwaretestinghelp.com/postman-api-documentation/)

## Setup and Running Documentation

### 1. Membuat local database yang akan digunakan menggunakan MySQL Server CLI. 
```
> mysql -u <DATABASE USER NAME> -p

Enter Password: <DATABASE USER PASSWORD>

mysql> CREATE DATABASE <DATABASE NAME>
```

### 2. Membuat file `.env` di folder dimana file `.env.example` dapat ditemukan.

### 3. Mengisi enviromental variables pada `.env` sesuai (merujuk) dengan contoh pada `.env.example` di folder bersangkutan. 
```sh
# Folder Utama
DBHOST="<HOST>"
DBUSER="<DATABASE USER NAME>"
DBPASSWORD="<DATABASE USER PASSWORD>"
DBNAME="<DATABASE NAME>"

# Folder Server
PORT=<SERVER PORT>
DBCONN="<DATABASE USER NAME>:<DATABASE USER PASSWORD>@tcp(<HOST>:3306)/<DATABASE NAME>"
```

### 4. Menginstall semua dependencies NPM dari folder utama. 
```
> npm install
```

### 5. Membuat table dengan menjalankan script <i>create-table</i>. 
```
> node .\create-table.js
```

### 6. Mem-populate table yang telah dibuat dengan menjalankan script <i>populate-table</i>.
```
> node .\populate-table.js
```

### 7. Menginstall semua package yang dibutuhkan pada folder server. (tidak perlu dilakukan bila sudah sebelumnya sudah diinstall)
```
> cd .\server\

> go get -u github.com/gorilla/mux
> go get -u github.com/jinzhu/gorm
> go get -u github.com/jinzhu/gorm/dialects/mysql
> go get -u github.com/joho/godotenv
```

### 8. Menjalankan server (backend) dari aplikasi. 
```
> cd .\server\

> go run .\main.go
```

### 9. Menginstall dependencies yang dibutuhkan pada folder client\product-view. 
```
> cd .\client\product-view\

> npm install
```

### 10. Menjalankan client (frontend) dari aplikasi. 
```
> cd .\client\product-view\

> npm start
```

## Endpoint Documentation
Dokumentasi endpoint dapat diakses dengan cara meng-import file <i>Pagination.postman_collection.json</i> atau melalui [link ini](https://documenter.getpostman.com/view/17856588/2s83zpHL7X#f6d9bb69-d5b4-4d09-bbef-af5eb5ef199b). 


## Contributor

- Vincent Pradipta (xhfmvls)
