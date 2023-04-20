const initialState = {
  items: [],
  count: 0,
};
const basket = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.items.some((item) => item.item.id === action.payLoad.id)) {
        const itemIndex = state.items.findIndex(
          (item) => item.item.id === action.payLoad.id
        );
        const newArray = state.items.map((product, index) =>
          index === itemIndex
            ? { ...product, count: product.count + 1 }
            : product
        );
        return {
          ...state,
          count: ++state.count,
          items: newArray,
        };
      }
      return {
        ...state,
        count: ++state.count,
        items: [
          ...state.items,
          { item: action.payLoad, count: 1, id: action.payLoad.id },
        ],
      };
    case "ADD_ONE_ITEM":
      const findIndexOne = state.items.findIndex(
        (item) => item.item.id === action.payLoad
      );
      const newCountArray = state.items.map((item, index) =>
        index === findIndexOne ? { ...item, count: item.count + 1 } : item
      );
      return {
        ...state,
        count: ++state.count,
        items: newCountArray,
      };
    case "SUBSTRACT_ONE_ITEM":
      const findIndexOneSubstract = state.items.findIndex(
        (item) => item.item.id === action.payLoad
      );
      if (state.items[findIndexOneSubstract].count === 1) {
        return {
          ...state,
          count: --state.count,
          items: state.items.filter((item) => item.id !== action.payLoad),
        };
      }
      const newCountArraySubstract = state.items.map((item, index) =>
        index === findIndexOneSubstract
          ? { ...item, count: item.count - 1 }
          : item
      );
      return {
        ...state,
        count: --state.count,
        items: newCountArraySubstract,
      };
    case "DELETE_ALL":
      return {
        ...initialState,
      };
    case "DELETE_ONE":
      const findDeleteIndex = state.items.findIndex(
        (item) => item.id === action.payLoad
      );
      return {
        count: state.count - state.items[findDeleteIndex].count,
        items: state.items.filter((item) => item.id !== action.payLoad),
      };
    default:
      return state;
  }
};
export default basket;
