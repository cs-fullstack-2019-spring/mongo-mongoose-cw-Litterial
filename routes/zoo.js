const hi_express=require('express');
const my_router=hi_express.Router();
var Zoo=require('../models/ZooAnimal');

my_router.get('/',(req,res)=>
{
   res.send("This is the zoo page.")   //index for zoo
});

my_router.get('/animal',(req,res)=>
{
    res.send("This is the animal page. Nothing is on here")  // route to animal
});

my_router.get('/animal/add/:id/:type/:des',(req,res)=>   //create animal
{
    ZooData={         //data modle
      animal_id: req.params.id,
      animal_type: req.params.type,
      animal_description: req.params.des,
    };

    Zoo.create(ZooData,(error,results)=>  //creates based of animal
    {
        if(error)
            return console.log (error);
        else
            return console.log(results);
    });
    res.send("New Animal created");
});
my_router.get('/animal/get/:id',(req,res)=>
{
    Zoo.findOne({animal_id:req.params.id},(error,results)=>    //finds an animal and returns
    {
        if (error)
        return console.log('Animal not found');

        else
            res.send(results);

    });
});
my_router.get('/animal/update/:id/:type/:des',(req,res)=> {    //updates animal
    Zoo.findOne({animal_id: req.params.id}, (error, results) => {
        if (error)
            return console.log('Animal not found');

        else {
            Zoo.updateMany({animal_id: req.params.id},{animal_type: req.params.type, animal_description: req.params.des}, (err,results2)=>{
            res.send(results2);
            });
        }
    });
});
my_router.get('/animal/delete/:id',(req,res)=>{      //deletes animal
    Zoo.deleteOne({animal_id: req.params.id}, (error, results) => {
        if (error)
            return console.log('Animal not found');

        else {
            res.send('Animal Deleted');
        }
    });
});


module.exports=my_router;