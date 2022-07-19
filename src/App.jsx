import logo from './logo.svg';
import './App.css';
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar'
import './components/ItemListContainer/ItemListContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {

 
  const styleApp = {backgroundColor: 'black', fontSize:22}

  const saludo = () => {alert('Hi!')}
  
  return (
      <>
      <NavBar />
      <ItemListContainer />
      </>


  )
  


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  // );
}

export default App;
