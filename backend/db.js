// const mongoose = require('mongoose');

// // MongoDB URL
// const mongoURL = 'mongodb://127.0.0.1:27017/Hotels';

// // Connect to MongoDB (NO deprecated options)
// mongoose.connect(mongoURL);

// const db = mongoose.connection;

// // Event listeners
// db.on('connected', () => {
//     console.log('Connected to MongoDB');
// });

// db.on('error', (err) => {
//     console.error('MongoDB connection error:', err);
// });

// db.on('disconnected', () => {
//     console.log('MongoDB disconnected');
// });

// module.exports = db;



//========================moongose linkup betwen database a=server and nptejs server ====================================================================

// moongose :library

// import mongoose from "mongoose";

// //url

// const mongoURL=' mongodb://127.0.0.1:27017/Fullstackdata'

// // mongoose.connect(mongoURL,{
// //     useNewUrlParser: true,  //for connecttion establishment
// //     useUnifiedTopology:true   //connection establis ke liye ye parameters likhna hota hai 

// // })
// // const db = mongoose.connect;

// //Events Listners 

// mongoose.connect(mongoURL)
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });

// // Event listeners
// mongoose.connection.on("disconnected", () => {
//   console.log("MongoDB disconnected");
// });

// //Export database connections 

// module.exports=db;

//==========================================================================================

// import mongoose from "mongoose";

// const mongoURL = "mongodb://127.0.0.1:27017/Fullstackdata";

// mongoose.connect(mongoURL)
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });

// // Event listeners
// mongoose.connection.on("disconnected", () => {
//   console.log("MongoDB disconnected");
// });

// export default mongoose;


// =========================================================
//databases
// sql
// postgresql
// mongodb
// mariadb
// oracle


const mongoose =require('mongoose')


