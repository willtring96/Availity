import React, { ReactElement, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect, RouteComponentProps, useHistory } from 'react-router-dom';
import './App.css';
import { User } from './Components/Models/User';
import Home from './Components/Pages/Home';
import Register from './Components/Pages/Register';

function App() {
  const [user, setUser] = useState({} as User);
  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem('User');
    console.log('setuser');
    if (user !== null) {
      const foundUser: User = JSON.parse(user);
      setUser(foundUser);
    } else {
      history.push('/');
    }
  }, [history]);

  if (user === null) {
    const user = localStorage.getItem('portalUser');
    if (user !== null) {
      const foundUser: User = JSON.parse(user);
      if (foundUser) {
        setUser(foundUser);
      } else {
        history.push('/');
      }
    } else {
      history.push('/');
    }
  }
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/home" render={(props) => <Home {...props} user={user} />} />
          <Redirect from="/" to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
