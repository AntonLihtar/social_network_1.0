import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const postData = [
    {id: 1, message: "Hello , this is 1 message", likesCount: 10},
    {id: 2, message: "Post #2 good", likesCount: 33},
    {id: 3, message: "Post #3", likesCount: 5},
    {id: 4, message: "Post 4 goodbye", likesCount: 18},
]

const dialogs = [
    {id: 1, name: "Dimich"},
    {id: 2, name: "Anton"},
    {id: 3, name: "Ehor"},
    {id: 4, name: "Vanya"},
    {id: 5, name: "Petrosyan"},
]

const messages = [
    {id: 1, text: "1rrr ttytyty"},
    {id: 2, text: "Lorem ipsum dolor. Natus nulla"},
    {id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipisicing"}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App
            posts={postData}
            messages={messages}
            dialogs={dialogs}
          />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
