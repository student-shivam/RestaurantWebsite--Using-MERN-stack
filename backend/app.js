import express from "express";
import cors from  "cors";
import dotenv from 'dotenv'
import { dbConnection } from "./database/dbConnection.js"
import { errorMiddlerware } from "./error/error.js";
import  reservationRouter from './routes/reservationRoutes.js'

const app =express();

dotenv.config({ path:"./config/config.env"});

app.use(cors({
  origin: "http://localhost:3000",  // React frontend port
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/reservation',reservationRouter)
  console.log("Server running on http://localhost:4000");


dbConnection();

app.use(errorMiddlerware)

export default app;