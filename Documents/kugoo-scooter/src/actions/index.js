export const setName = (name) => {
  return {
    type: "SET_NAME",
    payLoad: name,
  };
};
export const setPassword = (password) => {
  return {
    type: "SET_PASSWORD",
    payLoad: password,
  };
};
export const setScooters = (item) => {
  return {
    type: "SCOOTERS_FETCHING",
    payLoad: item,
  };
};
export const additem = (item) => {
  return {
    type: "ADD_ITEM",
    payLoad: item,
  };
};
export const addOneItem = (id) => {
  return {
    type: "ADD_ONE_ITEM",
    payLoad: id,
  };
};
export const substractOneItem = (id) => {
  return {
    type: "SUBSTRACT_ONE_ITEM",
    payLoad: id,
  };
};
export const deleteAll = () => {
  return {
    type: "DELETE_ALL",
  };
};
export const deleteOne = (id) => {
  return {
    type: "DELETE_ONE",
    payLoad: id,
  };
};
