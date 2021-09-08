import React, { useEffect } from "react";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Four0Four from "./FourZeroFour/Four0Four";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import Nav from "./Nav/Nav";
import NewQuestion from "./NewQuestion/NewQuestion";
import Question from "./Question/Question";
import { Route, Switch, Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "../Redux/Shared/Shared";

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(({ usersReducer }) => usersReducer);
  const authedUser = useSelector(({ authedUserReducer }) => authedUserReducer);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <>
      <Nav />
      {authedUser === null && <Redirect to="/login" />}
      {users !== {} && (
        <Switch>
          <Route exact path="/new" component={NewQuestion} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/leaderboard" component={LeaderBoard} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/question/:unqId" component={Question} />
          <Route exact component={Four0Four} />
        </Switch>
      )}
    </>
  );
};

export default App;
