const User = require ("../models/user.js");

const Project = require ("../models/project")
const Collab = require ("../models/collab")


Project.belongsTo(User,{
    foreignKey:"creator",
    onDelete: "CASCADE"
});

User.hasMany(Project,{
    foreignKey:"creator"
});

Collab.belongsTo(Project,{
    foreignKey:"project_id",
    onDelete:"CASCADE"
})


module.exports={
    User,
    Project,
    Collab
};
