import dotenv from "dotenv"
import connectDB from './Database/Database_connection.js'
import { app } from "./app.js";
import cookieParser from "cookie-parser";
app.use(cookieParser());
dotenv.config({
  path: "./.env",
});
connectDB()
.then(() => {
    app.listen(process.env.PORT || 6000, ()=> {
    console.log("Server Is Up And Running");
})
})
.catch((error)=> {
console.log("Server Is Not Runing",error);

})