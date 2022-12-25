const getLocations = async () => {
  const response = await fetch(
    `${process.env.BASE_URL}/${process.env.LOCATIONS}`
  );
  const data = await response.json();
  const dataString = JSON.stringify(data);
  window.localStorage.setItem("locations", dataString);
  return data;
};
getLocations();

const getMachines = async () => {
  const response = await fetch(
    `${process.env.BASE_URL}/${process.env.MACHINE_LIST}`
  );
  const data = await response.json();
  const dataString = JSON.stringify(data);
  window.localStorage.setItem("machines", dataString);
  return data;
};
getLocations();

const getComments = async () => {
  const response = await fetch(
    `${process.env.BASE_URL}/${process.env.COMMENT_LIST}`
  );
  const data = await response.json();
  const dataString = JSON.stringify(data);
  window.localStorage.setItem("comments", dataString);
  return data;
};
getLocations();
getMachines();
getComments();
