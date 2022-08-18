const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'ec2-3-223-242-224.compute-1.amazonaws.com',
    user : 'vigngobjtozcqv',
    database : 'd3ks8ggvets4ff',
    password : 'db612ad830a16b2f988401556c62c2bc77ae699e016999cbd9ab62a9becb4d08',
    port : 5432,
    ssl: {
      rejectUnauthorized: false
  }
    
  }
});

module.exports = knex;












/*
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    port : 5432,
    user : 'postgres',
    password : '1234',
    database : 'cadastro_usuarios' //api-cad-users
  }
});

module.exports = knex;
*/