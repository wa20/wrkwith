
const router = require('express').Router();
const { User } = require('../../models');
const fileUpload = require ("express-fileupload");


router.post("/signup" , async (req,res)=>{
    try{
        const newuser=await User.create({
            user_name: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            first_name:req.body.firstName,
            last_name:req.body.lastName
        })
        res.json(newuser)
    } catch (err) {
        res.status(500).json(err)
    }
})

//login function
router.post('/login', async (req, res) =>{

   
    try{
        const userData = await User.findOne({
            where: {user_name: req.body.username}
        });

        

        if (!userData) {
            res
                .status(400)
                .json({message: "Incorrect email or password, please try again"});
                return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        
      
       
        if(!validPassword) {
            res
                .status(400)
                .json({message:"Incorrect email or password, please try again"});
                return;
        }

       

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

        res.json({user: userData, message: "Logged in"})
        }); 
        
    } catch (err) {
        res.status(400).json(err);
    }

});

//logout function 

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });



//community page
router.get("/community", async (req,res) => {
    try {
        const userdata= await User.findAll();
        const users = userdata.map((user)=>user.get({plain:true}));
        res.render("community",{users});
    } catch(err){
        console.log("we hit this error here" + err)
    }
})




//Profile page
router.get("/profile", async (req, res) => {
  try {
    const userdata = await User.findByPk();
    const users = userdata.map((user) => user.get({ plain: true }));
    res.render("profilepage", { users });
  } catch (err) {
    console.log("we hit this error here" + err);
  }
});

// to upload an image to the db

router.post("/upload", (req, res) =>{
    let samplefile;
    let uploadpath;

    if (!req.files) {
        return res.status(400).send('no files were uploaded');
    }
samplefile=req.files.samplefile;
uploadpath= "__dirname:../../public/assets/avatars/"+samplefile.name;
console.log(samplefile)
console.log(" the uplod path is :::" + uploadpath)

// to move the file into storage 

samplefile.mv(uploadpath,  async function(err){
    if (err) return res.status(500).send(err);
console.log("this is the sample file  :::" + samplefile.name)
    const uploadimage = await User.update({avatar: samplefile.name}, {
        where:{
            id:2
        }
    });
    if (!uploadimage){
        res.status(404).json({message:`we are stuck here for some reaosn`});
        return
    } 
        res.status(200).json({message:`picture uploaded`});
})

})


module.exports = router;
