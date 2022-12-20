
const {launches} = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {

    //launches.values() - return the values form a map
    return res.status(200).json(Array.from(launches.values()));
}

function httpAddNewLaunch(res,req) {
    const launch = req.body;

    // Format the date
    launch.launchDate = new Date(launch.launchDate);

    addNewLaunch(launch);

    return res.status(201).json(launch);
}


module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch
};