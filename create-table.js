import mysql from 'mysql2'; 
import dotenv from 'dotenv';
dotenv.config(); 

const connCreds = {
  host: process.env.DBHOST,
  user: process.env.DBUSER, 
  password: process.env.DBPASSWORD, 
  database: process.env.DBNAME
};

const createTable = async() => {
  const tableName = process.argv[2] || 'Products'; 
  const query = 
  `CREATE TABLE ${tableName} (
  product_id CHAR(36) NOT NULL, 
  product_name VARCHAR(255) NOT NULL, 
  category VARCHAR(64) NOT NULL, 
  brand_name VARCHAR(255) NOT NULL, 
  retail_price DECIMAL(15,2) NOT NULL, 
  active_status BOOL NOT NULL, 
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deleted_at TIMESTAMP DEFAULT NULL,
  PRIMARY KEY(product_id))`;

  const conn = mysql.createConnection(connCreds);
  console.log('[+] Database Connected');
  conn.promise()
  .query(query)
  .then(console.log("[+] Table Created"))
  .catch(console.log)
  .then((con) => conn.end());
}

createTable(); 