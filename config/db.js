const mongoose = require("mongoose");

const connectDB = async()=> {
    try {
        const con = await mongoose.connect(process.env.MONGODB_URI);
        console.log(con);
        console.log("DB Connected Succesfully");
    } catch(err) {
        console.log("DB Connection failed");
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB;