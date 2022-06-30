import * as requestFromServer from "./crud";
import { callTypes, todosSlice} from "./slice"

const {actions} = todosSlice;

export const fetchItems = (queryParams) => (dispatch) => {
 
    dispatch(actions.startCall({ callType: callTypes.list }));
    
    return requestFromServer
      .findItems(queryParams)
      .then((response) => {
        dispatch(actions.itemsFetched({ totalCount: response.data.length, entities: response.data }));
       // console.log("response", response)
      })
      .catch((error) => {
        error.clientMessage = "Can't find todoList";
        dispatch(actions.catchError({ error, callType: callTypes.list }));
      });
  };



  export const fetchItem = (id) => (dispatch) => {
    if (!id) {
      return dispatch(actions.itemFetched({ data: undefined }));
    }
  
    dispatch(actions.startCall({ callType: callTypes.action }));
    return requestFromServer
      .getItemById(id)
      .then((response) => {
        dispatch(actions.itemFetched({ data: response.data }));
      })
      .catch((error) => {
        error.clientMessage = "Can't find todo";
        dispatch(actions.catchError({ error, callType: callTypes.action }));
      });
  };

  export const createItem = (data) => (dispatch) => {
    dispatch(actions.startCall({ callType: callTypes.action }));
    return requestFromServer
      .createItem(data)
      .then((response) => {
        dispatch(actions.itemCreated({ data: response.data}));
      })
      .catch((error) => {
        error.clientMessage = "Can't create todo";
        dispatch(actions.catchError({ error, callType: callTypes.action }));
      });
  };

  export const updateItem = (data) => (dispatch) => {
    dispatch(actions.startCall({ callType: callTypes.action }));
    return requestFromServer
      .updateItem(data)
      .then(() => {
        dispatch(actions.itemUpdated({data }));
      })
      .catch((error) => {
        error.clientMessage = "Can't update todo";
        dispatch(actions.catchError({ error, callType: callTypes.action }));
      });
  };

  export const deleteItem = (id) => (dispatch) => {
    dispatch(actions.startCall({ callType: callTypes.action }));
    return requestFromServer
      .deleteItem(id)
      .then((response) => {
        dispatch(actions.itemDeleted({ id }));
      })
      .catch((error) => {
        error.clientMessage = "Can't delete todo";
        dispatch(actions.catchError({ error, callType: callTypes.action }));
      });
  };
  