import pg from 'pg' 

//connection pool is a cache of database connections maintained so that the connections can be reused when needed, rather than being opened and closed for each database transaction

const config  = { // we are telling our config object to use environment variables for its configuration, so we need to provide those environment variables. 
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: {
        rejectUnauthorized: false // self-signed certificates allowed
    }
}

// the variable pool is set to a new pg.Pool object and pass the config object as the argument to its constructor. Export this variable. 
export const pool = new pg.Pool(config) 