import { addItemSuccess, deleteItemSuccess, fetchItemsSuccess, updateItemSuccess } from "../actions/actions";

const API_ENDPOINT = `http://localhost:3000/data`;

export const fetchItems = () => async (dispatch) => {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    dispatch(fetchItemsSuccess(data));
  } catch (error) {
    console.error('Error fetching items :',error)
  }
};


export const addItem = (item) => async (dispatch) => {
    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      const data = await response.json();
      dispatch(addItemSuccess(data));
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };
  
  export const updateItem = (item) => async (dispatch) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      const data = await response.json();
      dispatch(updateItemSuccess(data));
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };
  
  export const deleteItem = (itemId) => async (dispatch) => {
    try {
      await fetch(`${API_ENDPOINT}/${itemId}`, {
        method: 'DELETE',
      });
      dispatch(deleteItemSuccess(itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };