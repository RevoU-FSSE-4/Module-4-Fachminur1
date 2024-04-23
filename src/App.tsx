import React from 'react' ;
import './App.css';
import MultiStepForm from './Component/MultiStepForm';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <div>
      <MultiStepForm />
    </div>
  );
}



export default App;
