import { createStore } from "@reduxjs/toolkit";


let initialState = {
    title: 'Title',
    count: 0
}

const store = createStore((state = initialState, action) => {
   switch(action.type) {

    case 'SET_TITLE': {
     return state;
    };
    default: return state;
   }
});

export const setTitle = () => ({type: 'SER_TITLE'});

window.store = store;

export default store;