const sequelize = require("../config/connection");

const seeduser = require("./userseed");
const seedproject = require ("./projectseed");
const seedcollab = require ("./collabseed");



const seedAll = async () => {
    await sequelize.sync({force:true});
    await seeduser();
    await seedproject();
    await seedcollab();
    process.exit(0);
};

seedAll(); 

