import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App/App';
import reportWebVitals from './reportWebVitals';
import PetRecord from './PetRecord/PetRecord';
import Pets from './Pets/Pets';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PetRecord id={1} petName={'Dog'} additionalInfo={'His name is Cooper and he is very loyal.'} displayInfo={true}/>
    <PetRecord id={2} petName={'Kitten'} additionalInfo={'The name of this kitten is Ollie, she is very mobile and funny'} displayInfo={true}/>
    <PetRecord id={3} petName={'Hamster'} additionalInfo={'A hamster named Fin loves to eat'} displayInfo={false}/>
    <Pets/>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
