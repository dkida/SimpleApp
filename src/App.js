import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Nav } from './components/nav/nav.component';
import { Home } from './components/home/home.component';
import { Form } from './components/form/form.component';
import { Image } from './components/image/image.component';

function App() {
  // const [message, setMessage] = useState('Wiadomosc');

  // function onChangeHandler(event) {
  //   setMessage(event.target.value);
  // }


  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/">
             <Home />
            </Route>
            <Route exact path="/form">
             <Form />
            </Route>
            <Route exact path="/image">
             <Image />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <input
        type="text"
        value={message}
        onChange={onChangeHandler}
        /> */}
    </div>
  );
}

export default App;
