import React from "react";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Four0Four from "./FourZeroFour/Four0Four";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import Nav from "./Nav/Nav";
import NewQuestion from "./NewQuestion/NewQuestion";
import Question from "./Question/Question";
import { Route, Switch } from "react-router";

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/new" render={() => <NewQuestion />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/leaderboard" render={() => <LeaderBoard />} />
        <Route exact path="/question/:unqId" render={() => <Question />} />
        <Route exact path="/leaderboard" render={() => <LeaderBoard />} />
        <Route exact render={() => <Four0Four />} />
      </Switch>
    </div>
  );
};

export default App;
