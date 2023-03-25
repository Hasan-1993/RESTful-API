const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/student-db',{useUnifiedTopology:true}).then(()=>{
    console.log('Connection to MongoDB is successfull !!!');
}).catch((err)=>{
    console.log(`Connection to MongoDB has failed due to this ErRoR: ${err}`);
});