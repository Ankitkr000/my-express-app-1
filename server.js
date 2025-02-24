const express=require("express")
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello")
})


app.post("/login",(req,res)=>{
    const {email,password}=req.body

    if(!email)
        return res.status(400).json({error:"Email cannot be empty"})

    if(!password)
        return res.status(400).json({error:"Password cannot be empty"})


    res.json({message:"Login Successfull"})

    
})







app.listen(3000,()=>{
    console.log("server is running")
})