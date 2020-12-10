import './App.css';
import Header from './Header/Header';
import SideBar from "./SideBar/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from './Chat/Chat';
import { useState } from 'react';

function App() {

  let [user, setUser] = useState(null);
  
  return (
    <div className="app">
      <Router>
        {!user ? (
          <h1>Show Login Page</h1>
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
