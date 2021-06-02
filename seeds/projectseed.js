const {Project} = require("../models")

const projectData = [
    {
    title:"the micro blog app",
    details: "need help with creating the log in for my micro blogging app",
    tech:"express, mysql",
    creator: 1
},
{
    title:"the weather app",
    details:"having problems chaning the temp from c to f",
    tech:"javascript",
    creator:2
}
]

const seedproject=()=>Project.bulkCreate(projectData);

module.exports= seedproject;