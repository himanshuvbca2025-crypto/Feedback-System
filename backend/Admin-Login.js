import express from "express";
import cors from "cors"
import { MongoClient } from "mongodb";

const System = express();

System.use(cors());
System.use(express.json());

const client=new MongoClient("mongodb://127.0.0.1:27017");
await client.connect();

const db=client.db("FeedBack_System");
const cl=db.collection("Admin");


System.post("/admin/login",async(req,res)=>{

    console.log("Request Received");
    
    const {email,password}=req.body;

    const result=await cl.findOne({
        gmail:email,
        password:password
    });

    if(result){
        res.status(200).json({
            message:"Login Successfully"
        });
    }
    else{
        res.status(401).json({
            message:"Invalid gmail or password"
        });
    }
    

})

System.listen(1000,()=>{
    console.log("Server Running on 1000 port.....");
    
});


