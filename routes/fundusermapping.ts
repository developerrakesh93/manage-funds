
import * as express from "express";
import { PrismaClient } from '@prisma/client'

  let router = express.Router();

  const {fundUserMapping} = new PrismaClient()
  router.get('/', async(req, res)=>{
      
    const usersFund = await fundUserMapping.findMany({
        include: {
            User: true,
            Funds:true
        }
    });
    res.json(usersFund)
  });


  // Export the router
  export = router;

