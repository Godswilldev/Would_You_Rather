import React, { useState } from "react";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Four0Four from "./FourZeroFour/Four0Four";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import Nav from "./Nav/Nav";
import NewQuestion from "./NewQuestion/NewQuestion";
import Question from "./Question/Question";
import { Route, Switch, useHistory } from "react-router";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const logOut = () => setLoggedIn(false);
  const logIn = () => setLoggedIn(true);
  const history = useHistory();
  console.log(history);

  return (
    <div>
      {loggedIn ? history.push("/dashboard") : history.push("/login")}
      <Nav loggedIn={loggedIn} logOut={logOut} />
      <Switch>
        <Route exact path="/new" component={NewQuestion} />
        <Route exact path="/login" render={() => <Login logIn={logIn} />} />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/leaderboard" component={LeaderBoard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/question/:unqId" component={Question} />
        <Route exact component={Four0Four} />
      </Switch>
      {/* <button onClick={() => setLoggedIn(true)}>Click me</button> */}
    </div>
  );
};

export default App;
