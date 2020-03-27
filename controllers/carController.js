const mongoose = require('mongoose');
const Cars = require('../models/BECar');
const csv = require('csvtojson');
const formatter = require('../util/formater');

var readConfig = require('read-config');
var config = readConfig('./config.json');


let controller = () => { }


controller.Insert = async (req, res, next) => {

   try {
       
            let data = req.file;
            let list = [];
            let regEx = jsonParser(config, req.body.vendor);
            
            console.log("Inserting cars for : "+ req.body.vendor);            
            console.log("Included Columns: "+ regEx.includeColumns);            
            console.log("Ignored Columns: "+ regEx.ignoreColumns);

            list = await csv({

                trim: true,
                delimiter: [","],
                maxRowLength: 65535, 
                colParser: formatter,
                includeColumns: new RegExp(regEx.includeColumns), // I defined a configuration for this part
                ignoreColumns: new RegExp(regEx.ignoreColumns), 
            })
            .fromString(data.buffer.toString('utf8'))
            .on('data', (data) => {
                list.push(data);
            })
            .on('error', (err) => {
                console.log(err.message);
                throw err;

            })

            let result = await Cars.insertMany(list);

            if (!result) return res.status(401).send({
                succcess: false,
                message: "error while inserting the car rows!"
            }
          );



        return res.status(200).send({
            succcess: true,
            message: "The rows were inserted correctly!"
        });



    } catch (error) {

        return res.status(401).send({
            succcess: false,
            message: "An error ocurred" + error.message
        });

    }

}


controller.getAll = async (req, res, next) => {

    try {

        let cars = await Cars.find({});
        if (!cars) { return res.sendStatus(404); }

        return res.status(200).json({
            message: "Get All the Cars in DB",
            totalRows: cars.length,
            cars
        });



    } catch (error) {

        return res.status(401).json({
            message: 'Error',
            description: error.message
        })
    }
}

function jsonParser(json, key) {

    var string = JSON.stringify(json);
    var objectValue = JSON.parse(string);
    return objectValue[key];
 }
 
module.exports = controller;