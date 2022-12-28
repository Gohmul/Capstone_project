const getLocations = async () => {
  const locations = process.env.LOCATIONS;
  const BASE_URL = process.env.BASE_URL;
  const response = await fetch(`${BASE_URL}/${locations}`);
  const data = await response.json();
  const dataString = JSON.stringify(data);
  window.localStorage.setItem("locations", dataString);
  return data;
};

const getMachines = async () => {
  const BASE_URL = process.env.BASE_URL;
  const MACHINE_LIST = process.env.MACHINE_LIST;

  const response = await fetch(`${BASE_URL}/${process.env.MACHINE_LIST}`);
  const data = await response.json();
  const dataString = JSON.stringify(data);
  window.localStorage.setItem("machines", dataString);
  return data;
};

const getComments = async () => {
  const BASE_URL = process.env.BASE_URL;
  const COMMENT_LIST = process.env.COMMENT_LIST;

  const response = await fetch(`${BASE_URL}/${COMMENT_LIST}`);
  const data = await response.json();
  const dataString = JSON.stringify(data);
  window.localStorage.setItem("comments", dataString);
  return data;
};
getLocations();
getMachines();
getComments();
export default {
  getLocations,
  getMachines,
  getComments,
};
