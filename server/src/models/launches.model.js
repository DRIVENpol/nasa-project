const launches = new Map(); // mapp

const launch = {
    flightNumber: 100,
    mission: 'Exploration 1',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: ' Kepler-442 b',
    customer:['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

// Map the flightNumber to the launch (like in solidity)
launches.set(launch.flightNumber, launch);
// Get the launch
// launches.get(100);

let latesFlightNumber = 100;

function getAllLaunches() {
    return Array.from(launches.values());
}

// Add a new launch
function addNewLaunch(launch) {
    latesFlightNumber++;
    launches.set(
        latesFlightNumber, 
        Object.assign(launch, {
            upcoming: true,
            success: true,
            customers: ['ZTM', 'NASA'],
            flightNumber: latesFlightNumber,
        }));
}

module.exports = {
    // getAllLaunches, << not working
    launches,
    addNewLaunch
}
