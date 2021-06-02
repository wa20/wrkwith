const {Collab} =require("../models")


const collabData = [
    {
        project_id: 1,
        user_id: 3
    },
    {
        project_id:2,
        user_id:3
    }
]

const seedcollab=()=>Collab.bulkCreate(collabData);

module.exports= seedcollab;