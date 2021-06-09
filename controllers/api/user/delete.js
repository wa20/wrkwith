const router = require('express').Router();
const { User } = require('../../../models');
const withAuth = require('../../../utils/auth');


router.delete('/:id', withAuth, async (req, res) => {
    
    try{
        const userData = await User.destroy({
            where: {
                id: req.params.userID,
            }
        })

        res.status(200).json(userData);
    } catch (err){
        res.status(500).json(err);
    }
})



module.exports = router;