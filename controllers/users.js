const express = require('express')
const users = express()
const User = require('../models/users')


const createUser = async (req,res)=>{
    try{
        const user = await User.create(req.body)
        res.status(201).json({user})
    } catch(error){
         res.status(500).json({msg: error})
    }
}

const deleteUser = async (req,res)=>{
    try{
        const {id:userID} = req.params
        const users = await User.findOneAndDelete({_id:userID})
        

        if(!tasks){
            return res.status(404).json({msg:`no user found with id : ${taskID}`})
        }
        res.status(200).json({users})
       }catch(error){
        res.status(500).json({msg: error})
    }
}

const updateUser = async (req,res)=>{
    try{
        const {id:userID} = req.params
        const users = await User.findOneAndUpdate({_id:userID})
        

        if(!tasks){
            return res.status(404).json({msg:`no user found with id : ${taskID}`})
        }
        res.status(200).json({users})
       }catch(error){
        res.status(500).json({msg: error})
    }
}

const getUser = async (req,res)=>{
    try{
        const {id:userID} = req.params
        const users = await User.findOne({_id:userID})
        

        if(!users){
            return res.status(404).json({msg:`no user found with id : ${userID}`})
        }
        res.status(200).json({users})
       }catch(error){
        res.status(500).json({msg: error})
    }
}

module.exports = {
    createUser,getUser,updateUser,deleteUser
}