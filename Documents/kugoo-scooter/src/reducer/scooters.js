const initialState = {
  scootersData: [],
};

const scooters = (state = initialState, action) => {
  switch (action.type) {
    case "SCOOTERS_FETCHING":
      console.log(action.payLoad);
      return {
        ...state,
        scootersData: [...state.scootersData, action.payLoad],
      };
    default:
      return state;
  }
};

export default scooters;
