import app from "./app.js";

app.listen(process.env.PORT,() =>{
    console.log(`server Running On port ${process.env.PORT}`);
});