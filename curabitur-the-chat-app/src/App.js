import './App.css';
import Header from './Header/Header';
import SideBar from "./SideBar/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from './Chat/Chat';
import { useState } from 'react';
import Login from './Login/Login';
import { useStateValue } from './DataLayerConfig/StateProvider';

function App() {

  let [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
          <Header />  
          <div className="app_body">
            <SideBar />
            
            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <h1>Welcome</h1>
              </Route>
            </Switch>
          </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
