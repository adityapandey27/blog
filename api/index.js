const express=require('express');
const app = express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const multer = require("multer");
const path = require("path");

const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const postRoute=require('./routes/post')
const categoryRoute=require('./routes/categories')
const cors=require("cors")

dotenv.config();

app.use(express.json())
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials:true
}))
app.use("/images", express.static(path.join(__dirname, "/images")));
app.get("/",(req,res)=>{
  res.json({message:"Hello ji"})
})
mongoose.connect(process.env.MONGO_URL).then(
    console.log("Connected to mongo")
).catch((error)=>{
    console.log(error);
})



// storage for image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use('/api/post',postRoute);
app.use('/api/categories',categoryRoute);



app.listen(process.env.PORT||3000,()=>{
    console.log("Backend is running at ",process.env.PORT||3000);
})

// {
//     useNewUrlParser:true,
//     useUndefinedTopology:true,
//     useCreateIndex:true,
// }