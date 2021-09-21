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
import PrivateRoute from "./Routes/PrivateRoute";
import { useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const questions = useSelector(({ questionsReducer }) => questionsReducer);
  const users = useSelector(({ usersReducer }) => usersReducer);

  return (
    <>
      {questions && users && (
        <div>
          <Nav />
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/add" component={NewQuestion} />
            <PrivateRoute exact path="/leaderboard" component={LeaderBoard} />
            <PrivateRoute
              exact
              path="/questions/:question_id"
              component={Question}
            />
            <PrivateRoute component={Four0Four} />
          </Switch>
        </div>
      )}
    </>
  );
};

export default App;
