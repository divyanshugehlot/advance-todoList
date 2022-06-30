import { createSlice } from "@reduxjs/toolkit";
{/*
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    title:""
  },

  //lets us define reducers and it automatically generates actions
  reducers: {
    updatedTodo: (state, action) => {
      state = [...state, action.payload];
      //   state.push(action.payload);
      console.log(state)
      return state;
    },
  },
});

export const { updatedTodo } = todoSlice.actions;

export const updateList = (state) => state.todo;

export default todoSlice.reducer;*/}

const initialState={
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  searchItems: null,
  data: undefined,
  lastError: null,
};
export const callTypes = {
  list: "list",
  action: "action",
};

export const todosSlice = createSlice ({

name:"todo",
initialState:initialState,
reducers:{
  catchError:(state,action)=>{
    state.lastError=`${action.type}:${action.payload.error}`;
    if(action.payload.callType==callTypes.list){
      state.listLoading=false;
    }
    else{
      state.listLoading=false;
    }
  },
  startCall:(state,action)=>{
    state.lastError=null;
    if(action.payload.callType==callTypes.list){
      state.listLoading=true;
    }
    else{
      state.actionsLoading=true;
    }
  },
  //itemsById
  itemFetched:(state,action)=>{
    state.actionsLoading = false;
      state.data = action.payload.data;
      state.lastError = null;
  },
  // findItems
  itemsFetched: (state, action) => {
    const { totalCount, entities } = action.payload;
    state.listLoading = false;
    state.lastError = null;
    state.entities = entities;
    state.totalCount = totalCount;
  },
 
  // createItem
  itemCreated: (state, action) => {
    state.actionsLoading = false;
    state.lastError = null;
    state.entities.push(action.payload.data);
  },
  // updateItem
  itemUpdated: (state, action) => {
    state.lastError = null;
    state.actionsLoading = false;
   
    state.entities = state.entities.map((entity) => {
      
      if (entity?.id === action.payload.data?.id) { //use optoinal chaining if face error
      
        return action.payload.data;
      }
      return entity;
    });
  },
  // deleteItem
  itemDeleted: (state, action) => {
    state.lastError = null;
    state.actionsLoading = false;
    state.entities = state.entities.filter(
      (el) => el.id !== action.payload.id
    );
  },

}
})