async function getLocations() {
  const locations = process.env.LOCATIONS;
  const BASE_URL = process.env.BASE_URL;

  try {
    const response = await fetch(`${BASE_URL}/${locations}`, {
      mode: "cors", // no-cors, *cors, same-origin
      Accept: "application/json",
      credentials: "omit", // include, *same-origin, omit
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    const dataString = JSON.stringify(data);
    window.sessionStorage.setItem("locations", dataString);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getComments() {
  const BASE_URL = process.env.BASE_URL;
  const COMMENT_LIST = process.env.COMMENT_LIST;

  try {
    const response = await fetch(`${BASE_URL}/${COMMENT_LIST}`, {
      mode: "cors", // no-cors, *cors, same-origin
      Accept: "application/json",
      credentials: "omit", // include, *same-origin, omit
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    const dataString = JSON.stringify(data);
    window.sessionStorage.clear("comments");
    window.sessionStorage.setItem("comments", dataString);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getMachines() {
  const BASE_URL = process.env.BASE_URL;
  const MACHINE_LIST = process.env.MACHINE_LIST;

  try {
    const response = await fetch(`${BASE_URL}/${MACHINE_LIST}`, {
      mode: "cors", // no-cors, *cors, same-origin
      Accept: "application/json",
      credentials: "omit", // include, *same-origin, omit
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    const dataString = JSON.stringify(data);
    window.sessionStorage.setItem("machines", dataString);
    return data;
  } catch (error) {
    console.error(error);
  }
}
getLocations();
getMachines();
getComments();

export default {
  getLocations,
  getMachines,
  getComments,
};
