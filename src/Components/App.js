import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import AnsweredQuestionDetail from "./AnsweredQuestionDetail";
import Four0Four from "./Four0Four";
import LeaderBoard from "./LeaderBoard";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import UnansweredQuestionDetail from "./UnansweredQuestionDetail";
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
        <Route
          exact
          path="/question/:unqId"
          render={() => <UnansweredQuestionDetail />}
        />
        <Route
          exact
          path="/question/:aqId"
          render={() => <AnsweredQuestionDetail />}
        />
        <Route exact path="/leaderboard" render={() => <LeaderBoard />} />

        <Route exact render={() => <Four0Four />} />
      </Switch>
    </div>
  );
};

export default App;
