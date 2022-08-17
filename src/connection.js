const { Pool } = require('pg');

//configuração Heroku
const pool = new Pool({
    client: 'pg',
    connection: {
      host : 'ec2-44-206-197-71.compute-1.amazonaws.com',
      database : 'dcoop5pcgtj8e8', //api-cad-users
      user : 'zrfassfptqnnaa',      
      password : '951f2df2b3c56a786b1c74054617396f12f00b6a58af12e30583a3825e8aeef4',
      port : 5432,
      ssl: {
        rejectUnauthorized: false
      }
      
    }
  });

  const query = (text, params) => {
    return pool.query(text, params);
  }


  module.exports = {query};


/*Conexão banco de dados local

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