// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/recipes.db3'
    }
  },

  migrations: {
    directory: './migrations'
  },

  seeds: {
    directory: './seeds'
  },

  //enable foreign key constraints in sqlite 

  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    }
  }

  
};
