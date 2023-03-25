const express = require('express');
const router = new express.Router();
const student = require('../model/students');
router.get('/route', (req, res) => {
    res.send("Hello from routing department !!!");
});
router.post('/students', async (req, res) => {
    try {
        const newStudent = new student(req.body);
        const createStudent = await newStudent.save();
        console.log(createStudent);
        res.status(201).send(createStudent);
    } catch (err) {
        res.status(400).send();
    }
});
router.get('/students', async (req, res) => {
    try {
        const readAllStudents = await student.find();
        res.status(201).send(readAllStudents);
        console.log(readAllStudents);
    } catch (err) {
        res.status(400).send();
    }
});
router.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const readSpecStudent = await student.findById(_id);
        console.log(readSpecStudent);
        res.status(201).send(readSpecStudent);
    } catch (err) {
        res.status(400).send();
    }
});
router.patch('/students/:id', async(req,res)=>{
    try{
        const _id = req.params.id;
        const editStudent = await student.findByIdAndUpdate(_id,req.body,{new:true});
        console.log(editStudent);
        res.status(201).send(editStudent);
    }catch(err){
        res.status(400).send();
    }
});
router.delete('/students/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteStudent = await student.findByIdAndDelete(_id);
        console.log(deleteStudent);
        res.status(201).send(deleteStudent);
    }catch(err){
        res.status(400).send();
    }
});
module.exports = router;