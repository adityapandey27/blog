const router=require('express').Router();
const User=require('../models/User');

const bcrypt=require('bcrypt')

// UPDATE
// '/:id' find the user id and then update it as required
router.put("/:id",async (req,res)=>{
    // 
    if(req.body.userId === req.params.id)
    {
        // in case user want to update the password then we are hasing the passowrd again and storing the hashed password in the same key and using $set req.body to update all the values sent by user to update
        if(req.body.password)
        {
            const salt=await bcrypt.genSalt(10);
            req.body.passowrd=await bcrypt.hash(req.body.passowrd,salt)
         }

        try{
            const updatedUser=await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            });
            res.status(200).json(updatedUser);
        }
        catch(error){
            res.status(500).json(error)
        }

    }
    else{
        res.status(401).json("You can update only your account")
    }
    
})




module.exports=router