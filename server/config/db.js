const mongoose = require('mongoose');

async function db() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    } catch (error) {
    }
}

module.exports = db;