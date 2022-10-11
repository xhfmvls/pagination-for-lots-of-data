import { faker } from '@faker-js/faker';
import mysqlPromise from 'mysql2/promise';
import dotenv from 'dotenv';
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
  const conn = await mysqlPromise.createConnection(connCreds);
  console.log('[+] Database Connected');

  for(let i = 0; i < totalData; i++) {
    const product_id = faker.datatype.uuid();
    const product_name = faker.commerce.productName();
    const category = product_name.split(' ').slice(-1)[0]; 
    const brand_name = faker.company.name(); 
    const retail_price = faker.commerce.price();
    const active_status = faker.datatype.boolean();

    const query = `INSERT INTO ${tableName}(product_id, product_name, category, brand_name, retail_price, active_status) VALUES("${product_id}", "${product_name}", "${category}", "${brand_name}", ${retail_price}, ${active_status})`;
    await conn.execute(query);
  }

  await conn.end(); 
  console.log(`[+] Successfully insert ${totalData} data`);
}

populateTable(); 
// exit();