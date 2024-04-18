import React from 'react' ;
import './App.css';
import ExampleOne  from './example/exampleOneComponent';
import ExampleTwo from './example/exmapleTwoComponent';
import PropsOneComponent from './propsExample/propsOneComp';



function App() {

  const titles = ["FachmiNur", "NurFachmi", "NachmiRun"]

  return (
    <div className="App">
      <PropsOneComponent title='FachmiNur' description='Sedang Belajar'/>
      <PropsOneComponent title='FachmiNur1' description='Sedang Belajar'/>
      <PropsOneComponent title='FachmiNur2' description='Sedang Belajar'/>
    </div>
  );
} 

export default App;
