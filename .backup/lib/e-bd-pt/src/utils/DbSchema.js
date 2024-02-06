const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rw'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');

  const schema = {};

  // Fetch table information
  connection.query('SHOW TABLES', (err, tables) => {
    if (err) {
      console.error('Error fetching tables:', err);
      connection.end();
      return;
    }

    // Iterate through each table
    tables.forEach(table => {
      const tableName = table[`Tables_in_${connection.config.database}`];

      // Fetch column information for the table
      connection.query(`DESCRIBE ${tableName}`, (err, columns) => {
        if (err) {
          console.error(`Error fetching columns for ${tableName}:`, err);
          return;
        }

        const tableInfo = {
          columns: columns.map(column => ({
            name: column.Field,
            type: column.Type,
            allowNull: column.Null === 'YES',
            key: column.Key,
            defaultValue: column.Default,
            extra: column.Extra
          }))
        };

        schema[tableName] = tableInfo;

        // Check if all tables have been processed
        if (Object.keys(schema).length === tables.length) {
          console.log(JSON.stringify(schema, null, 2));
          connection.end();
        }
      });
    });
  });
});
