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

module.exports = {
    launches,
}