import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App/App';
import reportWebVitals from './reportWebVitals';
// import PetRecord from './PetRecord/PetRecord';
// import Pets from './Pets/Pets';
// import DogCard from './DogCard/DogCard';
// import Activity from './Activity/Activity';
// import Activity2 from './Activity2/Activity2';
import MyApp from './MyApp/MyApp';
import {  HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
    <HashRouter>
    <MyApp/>
    </HashRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
