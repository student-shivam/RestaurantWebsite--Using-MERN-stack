import mongoose from "mongoose";

export const dbConnection =() =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"RESTAURANT2"
    }).then(()=>{
        console.log("Connected to database  Succesfully!");
    })
    .catch((err) =>{
        console.log(`some error while connecting to databse! ${err}`);
    });
}