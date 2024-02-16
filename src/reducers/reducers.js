import {
  FETCH_ITEMS_SUCCESS,
  ADD_ITEM_SUCCESS,
  DELETE_ITEM_SUCCESS,
  UPDATE_ITEM_SUCCESS,
} from "../actions/actions";

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return { ...state, items: action.payload };
    case ADD_ITEM_SUCCESS:
      return { ...state, items: [...state.items, action.payload] };
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        item: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
