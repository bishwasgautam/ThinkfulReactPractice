import React, {useState} from 'react'
import './App.css';
import Header from './Header';
import Content from './Content'

function App() {


  //state
  const [loggedIn, setLoggedIn] = useState(false);

  //
  const [firstName, setFirstName] = useState("");
  const [registrationForm, setRegistrationForm] = useState({});
  const [subscriberNames, setSubcriberNames] = useState([])
  //LIFT UP STATE

  //componentWillUpdate

 

  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Content loggedIn={loggedIn}/>
     
    </div>
  );
}

export default App;
