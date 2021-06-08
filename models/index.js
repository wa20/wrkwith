const User = require("./user");

const Project = require("./project")
const Collab = require("./collab")


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

Project.hasMany(Collab,{
    foreignKey:"project_id"
});

User.hasMany(Collab,{
    foreignKey:"user_id",
});

Collab.belongsTo(User,{
    foreignKey:"user_id",
    onDelete:"CASCADE"
});

module.exports={
    User,
    Project,
    Collab
};
