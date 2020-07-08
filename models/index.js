import mongoose from 'mongoose';
import gradesModels from './gradesModel.js';

const db = {};
db.url = process.env.MONGODB;
db.mongoose = mongoose;
db.grades = gradesModels(mongoose);

export { db };
