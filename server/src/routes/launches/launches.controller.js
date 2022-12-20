const {launches} = require('../../models/launches.model');

function getAllLaunches(req, res) {

    //launches.values() - return the values form a map
    return res.status(200).json(Array.from(launches.values()));
}


module.exports = {
    getAllLaunches,
};