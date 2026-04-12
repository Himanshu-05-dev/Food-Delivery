import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"



// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// DB Connections
connectDB();

// API endpoint 
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})


// mongodb+srv://foodproject:99887766@cluster0.q7ws6oe.mongodb.net/?