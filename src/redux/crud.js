// findItems
// getItemById
// create
// update
// delete
import axios from "axios"
import { bindActionCreators } from "redux";
export const resource = "http://localhost:8000/todos";

// CREATE =>  POST: add a new item to the server
export function createItem(data) {
    return axios.post(resource, data);
  }
  // READ
export function getAllItems() {
    return axios.get(resource);
  }
  //get element by id
  export function getItemById(id) {
    return axios.get(`${resource}/${id}`);
  }  

  export function findItems(queryParams) {
    
    if(queryParams == "") {
      return axios.get(resource);
    }
    else if(queryParams!==""){
    
    return axios.get(`${resource}/?title_like=${queryParams}`);
    }
    
  }



  // UPDATE => PATCH: update the data on the server
export function updateItem(data) {
    return axios.patch(`${resource}/${data.id}`, data
      
    );
    
  }

  // DELETE => delete the item from the server
export function deleteItem(id) {
    return axios.delete(`${resource}/${id}`);
  }