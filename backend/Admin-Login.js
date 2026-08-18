import express from "express";
import cors from "cors"
import { MongoClient } from "mongodb";
import bcrybt from "bcrypt";

const System = express();

System.use(cors());
System.use(express.json());

const client=new MongoClient("mongodb://127.0.0.1:27017");
await client.connect();

const db=client.db("FeedBack_System");
const cl=db.collection("Admin");


System.post("/admin/login",async(req,res)=>{

 try {
        
    console.log("Request Received");
    
    const {gmail,password}=req.body;

     if (!gmail || !password) {
            return res.status(400).json({
                message: "Gmail and Password are required"
            });
        }
        

    const result=await cl.findOne({
        gmail:gmail,
    });

    if(!result){
       return res.status(401).json({
            message:"Invalid Gmail or Password"
        });
    }
    const isMatch=await bcrybt.compare(password,result.password);

    if(isMatch){
        res.status(200).json({
            message:"Login Successfully"
        });
    }
    else{
        res.status(401).json({
            message:"Invalid gmail or password"
        });
    }

 } catch (error) {
         
         res.status(500).json({
            message:"Internal Server Error!!!"
         });
    }
    

})

System.listen(1000,()=>{
    console.log("Server Running on 1000 port.....");
    
});


