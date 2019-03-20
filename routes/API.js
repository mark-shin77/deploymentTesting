const router = require("express").Router();
const DB= require("../models");

router.get("/employees", (req, res)=>{
    DB.Employee.findAll({}).then(data=>{res.json(data)})
});
//Route to get specific employees
router.get("/employee/:id",(req,res)=>{
    DB.Employee.findOne({where:{id:req.params.id}})
       .then(data=>{res.json(data)})
});
//Create Route
router.post("/employees", (req,res)=>{
    DB.Employee.create({
        eID: req.body.eid,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        salary: req.body.salary
    }).then(data=>{console.log(data)})
});
//Update Route by Id in params
router.post("/employee/:id", (req,res)=>{
    DB.Employee.update({
        eID: req.body.eid,
        first_name: req.body.first,
        last_name: req.body.last,
        email: req.body.email,
        phone: req.body.phone,
        salary: req.body.salary},
        {
            where: {id:req.params.id}
        }
    ).error(err=>{console.log(err)})
});
//Delete Route
router.post("/delete", (req,res)=>{
    DB.Employee.destroy({
        where: {
            id: req.body.id
        }
    }).then(data=>{console.log(data)})
});

module.exports = router;