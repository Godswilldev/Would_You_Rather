import React, { useEffect } from "react";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Four0Four from "./FourZeroFour/Four0Four";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import Nav from "./Nav/Nav";
import NewQuestion from "./NewQuestion/NewQuestion";
import Question from "./Question/Question";
import { Route, Switch } from "react-router";
import { useDispatch } from "react-redux";
import { handleInitialData } from "../Redux/Shared/Shared";
import QuestionDetail from "./Question/QuestionDetail/QuestionDetail";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/new" component={NewQuestion} />
        <Route exact path="/leaderboard" component={LeaderBoard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/question/:unqId" component={Question} />
        <Route exact path="/result/:id" component={QuestionDetail} />
        <Route component={Four0Four} />
      </Switch>
    </>
  );
};

export default App;
