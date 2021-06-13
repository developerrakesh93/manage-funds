
import * as express from "express";
import { PrismaClient } from '@prisma/client'

  let router = express.Router();

  const {user} = new PrismaClient()
  router.get('/', async(req, res)=>{
      console.log("users");
      
    const users = await user.findMany();
    res.json(users)
  });

  router.post('/', async (req,res)=>{
      const username = req.body;
      console.log("req.body", username);
      
      const userExists = await user.findUnique({
          where :username
      })
     if(userExists){
         return res.status(400).json({
             msg:"user already exists"
         })
     }

     const newUser = await user.create({
         data:username
     })
     res.json(newUser);
  })

  // Export the router
  export = router;

