const {User} = require ("../models");


const userData = [
    {
        user_name:"harith",
        email:"h2@email.com",
        first_name:"harith",
        last_name:"albadry",
        password:"1234" 
    },
    {
        user_name:"bipin",
        email:"b2@email.com",
        first_name:"bipin",
        last_name:"sorry dont know!",
        password:"1234"
    },
    {
        user_name:"andrea",
        first_name:"andrea",
        last_name:"bsomething ?",
        email:"a2@email.com",
        password:"1234"
    },
    {
        user_name:"wael",
        first_name:"wael",
        last_name:"ahmed",
        email:"w2@email.com",
        password:"1234"
    }
]

const seeduser=()=>User.bulkCreate(userData);

module.exports= seeduser;