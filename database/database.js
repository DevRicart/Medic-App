import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/medicapp')

const db = mongoose.connection;

db.openUri('error', console.error.bind(console, 'connection error: '));

db.once(
    'open', function() {
        console.log('Connected to database');
    }
);

export default db;