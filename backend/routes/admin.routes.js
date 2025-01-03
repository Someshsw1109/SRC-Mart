import express from 'express'
import People from '../models/people'
import { adminOnly,authenticate } from '../middleware/admin.middleware';
import bcrypt from 'bcrypt';
const router=express.Router();

router.post('create-admin',adminOnly,authenticate,async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const existingUser=await People.findOne({email});
        if(existingUser){
            return res.status(400).json({msg:"user already exists"});
        }
        const hashedPassword=bcrypt.hashSync(password,10);
        const newAdmin=new People({
            name,
            email,
            password:hashedPassword,
            role:"admin"
        })
        await admin.save();
        return res.status(201).json({msg:"admin created",
            newAdmin:newAdmin
        })
    }catch(error){
        return res.status(500).json({msg:"there is some error on this"})
    }
})
router.post('/signin', async (req, res) => {
    try {
      const { email, password } = req.body;
      const admin = await User.findOne({ email, role: 'admin' }); 
      if (!admin) {
        return res.status(404).json({ message: 'not found' });
      }
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'invalid' });
      }
      const token = jwt.sign(
        { id: admin._id, role: admin.role },
        JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      res.status(200).json({
        message: 'Sign-In successful',
        token,
        admin: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
        },
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  });

