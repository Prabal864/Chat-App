import express from "express";
import dotenv from 'dotenv';
import {appRouter} from "./routes/index.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import app,{server} from "./socket/socket.js";
import connectToMongoDB from "./db/mongoDBConnection.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __dirname2 = path.resolve();
dotenv.config({ path: path.resolve(__dirname, ".env") });
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/v1",appRouter);

app.use(express.static(path.join(__dirname2,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname2,"/frontend","dist","index.html"))
})

const port = process.env.PORT || 5000;

server.listen(port,()=>{
    connectToMongoDB();
    console.log(`Server Running On Port ${port}`);
});
