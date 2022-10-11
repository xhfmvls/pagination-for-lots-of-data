import { faker } from '@faker-js/faker';
import mysql from 'mysql2'; 
import dotenv from 'dotenv';
import { exit } from 'process';
dotenv.config(); 

const connCreds = {
  host: process.env.DBHOST,
  user: process.env.DBUSER, 
  password: process.env.DBPASSWORD, 
  database: process.env.DBNAME
};

const populateTable = async() => {
  const totalData = process.argv[2] || 5;
  const tableName = process.argv[3] || 'MsProduct'; 
  const conn = mysql.createConnection(connCreds);
  console.log('[+] Database Connected');

  for(let i = 0; i < totalData; i++) {
    const product_id = faker.datatype.uuid();
    const product_name = faker.commerce.productName();
    const category = product_name.split(' ').slice(-1)[0]; 
    const brand_name = faker.company.name(); 
    const retail_price = faker.commerce.price();
    const active_status = faker.datatype.boolean();
    const date = faker.datatype.datetime({min: 1577836800000, max: 1893456000000}); 

    const query = `INSERT INTO ${tableName} VALUES(${product_id}, ${product_name}, ${category}, ${brand_name}, ${retail_price}, ${active_status}, ${date})`;
    
    conn.promise()
  }
  console.log(`[+] Successfully insert ${totalData} data`);
}

populateTable(); 
exit();