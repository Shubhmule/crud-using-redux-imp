export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';


export const fetchItemsSuccess = (items) => ({
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
  });

  export const addItemSuccess = (item) => ({
    type: ADD_ITEM_SUCCESS,
    payload: item,
  });

  export const  updateItemSuccess=(item)=>({
    type: UPDATE_ITEM_SUCCESS,
    payload: item,
  })

  export const deleteItemSuccess=(item)=>({
    type: DELETE_ITEM_SUCCESS,
    payload:item,
  })