const router=require('express').Router();
const User=require('../models/User');
const Post=require('../models/Post');

// CREATE NEW POST
router.post("/",async (req,res)=>{
    const newPost=new Post(req.body);
    try{
        const savedPost=await newPost.save();
        res.status(200).json(savedPost);
    }catch(error)
    {
        res.status(500).json(error);
    }    
})


// UPDATE POST
router.put("/:id",async (req,res)=>{
     try{
        const post=await Post.findById(req.params.id);
        if(post.username === req.body.data.username)
        {
            try{
                const updatedPost= await Post.findByIdAndUpdate(req.params.id,{
                    $set:req.body.data
                },{new:true})
                res.status(200).json(updatedPost)
            }catch(error)
            {
                res.status(500).json(error)
            }
            
        }else{
            res.status(401).json("You can update only your post!");
        }

     }catch(error)
     {
        res.status(500).json(error)
     }
    
    
})


// DELETE POST
router.delete("/:id",async (req,res)=>{
    try{
        const post=await Post.findById(req.params.id);
        if(post.username === req.body.username)
        {
            try{
                const a=await post.deleteOne();
                res.status(200).json("Post has been deleted...")
              }catch(error)
              {
                res.status(500).json(error)
            }
            
        }else{
            res.status(401).json("You can only delete your post!");
        }

     }catch(error)
     {
        res.status(500).json(" error with internal server error")
     }
})

// GET POST
router.get("/:id",async (req,res)=>{
try{
    const post=await Post.findById(req.params.id);
    res.status(200).json(post);
}
catch(error)
{
    res.status(500).json(error)
}
})

// GET ALL POST
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
      let posts;
      if (username) {
        posts = await Post.find({ username });
      } else if (catName) {
        posts = await Post.find({
          categories: {
            $in: [catName],
          },
        });
      } else {
        posts = await Post.find();
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports=router