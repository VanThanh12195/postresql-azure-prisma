import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const inventory = await prisma.inventory.findMany();

  console.log(inventory);
}

main();

// const { Client } = require('pg');

// const config = {
//     host: 'thanh-postgresql.postgres.database.azure.com',
//     // Do not hard code your username and password.
//     // Consider using Node environment variables.
//     user: 'vanthanh12195',
//     password: 'Spider.2023',
//     database: 'postgres',
//     port: 5432,
//     ssl: true
// };

// const client = new Client(config);

// client.connect(err => {
//     if (err) throw err;
//     else {
//         queryDatabase();
//     }
// });

// function queryDatabase() {
//     const query = `
//         DROP TABLE IF EXISTS inventory;
//         CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);
//         INSERT INTO inventory (name, quantity) VALUES ('banana', 150);
//         INSERT INTO inventory (name, quantity) VALUES ('orange', 154);
//         INSERT INTO inventory (name, quantity) VALUES ('apple', 100);
//     `;

//     client
//         .query(query)
//         .then(() => {
//             console.log('Table created successfully!');
//             client.end(console.log('Closed client connection'));
//         })
//         .catch(err => console.log(err))
//         .then(() => {
//             console.log('Finished execution, exiting now');
//             process.exit();
//         });
// }
