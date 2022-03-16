// import {Component} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello</h2>
}

const Field = () => {
  const holder = 'Type here';
  const styleField = {
    width: '300px'
  };
  return <input placeholder={holder} type='text' style={styleField}/>
} 


// class Fields extends Component {
//   render() {
//     const holder = 'Type here';
//     const styleField = {
//     width: '300px'
//     };
//     return <input placeholder={holder} type='text' style={styleField}/>
//   }
// }




function Btn() {
  const text = 'Log in';
  const isLog = true;
  // const res = () => {
    // return 'Log in';
  // }
  return <button>{isLog ? 'Enter' : text}</button>
}

//Если больше 1 строки, то используются круглые скобки 
//Всегда используется обертка (1 как минимум)
function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>  
    </div>
  );
}

export default App;
