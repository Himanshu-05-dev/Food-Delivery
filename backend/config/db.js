import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb://foodproject:99887766@ac-pg79vaj-shard-00-00.q7ws6oe.mongodb.net:27017,ac-pg79vaj-shard-00-01.q7ws6oe.mongodb.net:27017,ac-pg79vaj-shard-00-02.q7ws6oe.mongodb.net:27017/?ssl=true&replicaSet=atlas-7bsxke-shard-0&authSource=admin&appName=Cluster0').then(()=>console.log("DB Connected"));
}