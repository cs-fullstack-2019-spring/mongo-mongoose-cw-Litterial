var mongooseman=require('mongoose');
var Schema=mongooseman.Schema;
var Zoo_Schema=new Schema(
    {
        animal_id: String,
        animal_type:String,
        animal_description:String,
    }

);



module.exports=mongooseman.model('Zoo',Zoo_Schema);
