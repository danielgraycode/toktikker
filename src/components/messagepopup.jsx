/*
How to call:
import {ADD, useToastContext} from "../messagepopup"
const {toastDispatch} = useToastContext();
toastDispatch({
            type: ADD,
            payload: { message: "Hello world", messageSender: "Dan" },
          })
        }
        */

import React, { useState, createContext, useReducer, useContext  } from "react";
import {Toast} from 'react-bootstrap';

export const ToastContext = createContext();

const initialState = [];

export const ADD = 'ADD';

export const toastReducer = (state, action) => {
  switch (action.type) {
    case ADD:
        //Add to array of toasts to display
      return [
        {
          message: action.payload.message,
          messageSender: action.payload.messageSender
        }
      ];
    default:
      return state;
  }
};

export const ToastProvider = props => {
  const [toast, toastDispatch] = useReducer(toastReducer, initialState);
  const toastData = { toast, toastDispatch };
  return (
    <ToastContext.Provider value={toastData}>
      {props.children}
      <MessagePopup toast={toast}/>
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  return useContext(ToastContext);
};


export default function MessagePopup({toast}) {
    const [show, setShow] = useState(true)
    if (toast.length === 0) {
        return null
    } else {
    let toastInfo = toast[0]
    return (
        <Toast onClose={() => setShow(false)} show={show} delay={10000} autohide style={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}>
            <Toast.Header>
            <strong className="mr-auto">{toastInfo.messageSender}</strong>
            </Toast.Header>
            <Toast.Body>{toastInfo.message}</Toast.Body>
        </Toast>
    )
}
}
