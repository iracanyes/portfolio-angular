
db.getSiblingDB('admin');

db.auth(_getEnv('MONGODB_ROOT_USERNAME'),_getEnv('MONGODB_ROOT_PASSWORD'));


db.createUser({
    user: _getEnv('MONGODB_NON_ROOT_USERNAME'),
    pwd: _getEnv('MONGODB_NON_ROOT_PASSWORD'),
    roles: [
        {
            role: "readWrite",
            db: _getEnv('MONGODB_DB_NAME')
        }
    ]
});

db = db.getSiblingDB(_getEnv('MONGODB_DB_NAME'));

db.createCollection('users');

db.users.insert({
    name: _getEnv('MONGODB_NON_ROOT_USERNAME'),
    email: "iracanyes@gmail.com"
})

db.users.insert({
    name:"k.iracanye",
    email: "k.iracanyes@gmail.com"
})