const API_URL = "http://localhost:3001/"

async function httpGetPlanets() {
  const response = await fetch(`${API_URL}planets`);
  return response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}launches`);
  const fetchedLaunches = await response.json();

  // ASC sorting
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};