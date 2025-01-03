import express from 'express';
import People from '../models/people'
import jwt from 'jsonwebtoken'


const jwt_secret="8888888888" //ese env mein dal lena 
export const adminOnly=(req,res,next)=>{
    if(req.user.role!=='admin'){
        return res.status(401).json(
            {
                msg:"not authorized"
            }
        )
    }
}
export const authenticate=(req,res,next)=>{
    const token=req.headers.authorization?.split('')[1];
    if(!token){
        return res.status(401).json({msg:"access denied"})
    }
    try{
        const decoded=jwt.verify(token,jwt_secret);
        req.user=decoded;
        next();
    }catch(error){
        return res.status(401).json({msg:"access denied"});
    }
}
