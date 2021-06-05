const {User} = require ("../models");


const userData = [
    {
        user_name:"harith",
        email:"h2@email.com",
        first_name:"harith",
        last_name:"albadry",
        password:"1234", 
        bio:" full stack web dev in the making",
        
    },
    {
        user_name:"bipin",
        email:"b2@email.com",
        first_name:"bipin",
        last_name:"sorry dont know!",
        password:"1234",
        bio:" full stack web dev in the making 2",
        avatar:"/assets/avatars/avatar2.jpg"
    },
    {
        user_name:"andrea",
        first_name:"andrea",
        last_name:"bsomething ?",
        email:"a2@email.com",
        password:"1234",
        bio:" full stack web dev in the making 3",
        
        
    },
    {
        user_name:"wael",
        first_name:"wael",
        last_name:"ahmed",
        email:"w2@email.com",
        password:"1234",
        bio:" full stack web dev in the making 4",
        avatar:"/assets/avatars/avatar3.jpg"
    }
]

const seeduser=()=> User.bulkCreate(userData, {
    //runs each individual password as a hash
individualHooks: true,

}); 

module.exports= seeduser;