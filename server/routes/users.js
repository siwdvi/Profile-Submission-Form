const express=require('express');
const path = require('path');
const router = express.Router();
const usercontroller = require('../controllers/users');
const multer = require('multer');

// router.post('/',usercontroller.addUser);
router.get('/users',usercontroller.getAllUsers);
router.get('/users/:id',usercontroller.getUsersById);

// ----------- FILEs UPLOAD ------------------------------------

const storage = multer.diskStorage({
    destination:(req, file, cd) => {
        cd(null,'uploads/');
    },
    filename : (req, file, cd) => {
        cd(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({storage : storage});

const cpupload = upload.fields([{ name : 'resume', maxCount : 1},{ name : 'photo', maxCount : 1}]);




router.post('/',cpupload, usercontroller.addUser)

module.exports=router;