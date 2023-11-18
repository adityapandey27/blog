const router=require('express').Router();
const User=require('../models/User');


const bcrypt=require('bcrypt');

// 1.Creating something -> POST
// 2.Updating -> PUT
// 3.Deleting -> DELETE
// 4.Fetching-> GET


// Register
router.post("/register",async (req,res)=>{
    // using this speical async call back function becasue this function will do multiple task like connect to data base, create new and return reponse, hence we can not find the time required to perform this task 

    try{
        // if using async function always use try and catch becase we are going to perform multiple task and any one would fail
        
        // const newUser=new User(req.body)
        // ignore using this way beacuse initially we only need 3 thing but bracuse we are pasing the whole object It may take every thing


        // it is a last step read the below comment first
        const salt=await bcrypt.genSalt(10);
        const hashedPass=await bcrypt.hash(req.body.password,salt)
       // 


        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            // password:req.body.password,
            password:hashedPass,
        })

        // to save the user
        const user=await newUser.save();

        res.status(200).json(user);

        // 23:00
        // we can not reach this url because it is not added into index.js file
        // const authRoute=require('./routes/auth')
        // app.use('/api/auth',authRoute)

        // even after writing this it will not work because this app is not able to send json object inside body
        // app.use(express.json())


        // 28
        // working fine but passowrd is visible in db, now to hide 
        // install bcrypt 
    }
    catch(error){
        res.status(500).json(error)
    }
    
})



// Login

router.post("/login",async (req,res)=>{
    try{
        const user=await User.findOne({
            username:req.body.username
        })
        !user&& res.status(400).json('Wrong credentioals!!')

        // compareing the above has passowrd with the new has password
        const validated=await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json('Wrong Credential!')

        res.status(200).json(user);
    }
    catch(error)
    {
        res.status(500).json(error);
    }
})

module.exports=router