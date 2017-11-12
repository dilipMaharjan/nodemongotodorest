const MONGOCLIENT = require('mongodb').MongoClient;

MONGOCLIENT.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        Console.log("Unable to connect to database.");
    }
    console.log("Database connected Successfully.");

    db.collection('todo').insertOne({
        text: "Initialize an app",
        completed: true
    }, (err, result) => {
        if (err) {
            console.log("Unable to insert data.")
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('todo').find().toArray().then(docs => {
        console.log(JSON.stringify(docs, undefined, 2))
    }, err => {
        console.log("Unable to fetch data.")
    });
    db.close();
})
