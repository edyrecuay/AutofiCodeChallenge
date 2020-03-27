const express = require('express');
const appRouter = express.Router();

const multer = require('multer');
const memStorage = multer.memoryStorage();

const carController = require('../controllers/carController')


const upload = multer({
  storage: memStorage,
  limits: {
    fileSize: 30000000
  },
  fileFilter(req, file, cb) {

    if (!file.mimetype.match('text/csv')) 
        {
          console.log(file);
          res.send({
                    succcess: false,
                    message: "Please upload only CSV files."
                });
       }
      cb(undefined, true);
  }
});


appRouter.get("/", function(req, res) {
  res.status(200).send("Welcome to the  restful API to Upload CSV files");
});


appRouter.post('/upload', upload.single('file'), carController.Insert, (error, req, res, next) => {

  res.status(400).json({

    message: 'Error in upload',
    description: error.message

  })

});


appRouter.route('/allcars').get(carController.getAll);



module.exports = appRouter;

