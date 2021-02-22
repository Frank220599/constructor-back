let config;

if (process.env.NODE_ENV === 'development') {
    config = {
        DATABASE_URL: 'mysql://root:2205@localhost:3306/ddgi',
        DATABASE_USER: 'root',
        DATABASE_PASSWORD: '2205',
        DATABASE_NAME: 'ddgi',
        DATABASE_HOST: 'localhost',
        DATABASE_PORT: 3306
    }
} else {
    config = {
        DATABASE_URL: 'mysql://LaOru8fzgQ:PWbmZyreL5@remotemysql.com:3306/LaOru8fzgQ',
        DATABASE_USER: 'LaOru8fzgQ',
        DATABASE_PASSWORD: 'PWbmZyreL5',
        DATABASE_NAME: 'LaOru8fzgQ',
        DATABASE_HOST: 'remotemysql.com',
        DATABASE_PORT: 3306
    }
}


module.exports = {
    "type": "mysql",
    "host": config.DATABASE_HOST,
    "port": config.DATABASE_PORT,
    "username": config.DATABASE_USER,
    "password": config.DATABASE_PASSWORD,
    "database": config.DATABASE_NAME,
    "synchronize": true,
    "logging": false,
    "seeds": [
        __dirname + "/src/database/seeds/**/*.ts"
    ],
    "factories": [
        __dirname + "/src/database/factories/**/*.ts"
    ],
    "entities": [
        __dirname + "/src/database/entities/index.ts"
    ],
    "migrations": [
        __dirname + "/src/database/migrations/**/*.ts"
    ],
    "subscribers": [
        __dirname + "/src/database/subscribers/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "../src/database/entities",
        "migrationsDir": "../src/database/migrations",
        "subscribersDir": "../src/database/subscribers"
    }
};