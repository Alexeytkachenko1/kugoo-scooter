const initialState = {
  name: "",
  password: "",
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payLoad,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payLoad,
      };
    default:
      return state;
  }
};
export default user;
