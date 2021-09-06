import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import AnsweredQuestionDetail from "./AnsweredQuestionDetail";
import AnswerQuestion from "./AnswerQuestion";
import Four0Four from "./Four0Four";
import LeaderBoard from "./LeaderBoard";
import LeaderCard from "./LeaderCard";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import QuestionDetail from "./QuestionDetail";
import QuestionListItem from "./QuestionListItem";
import UnansweredQuestionDetail from "./UnansweredQuestionDetail";
const App = () => {
  return (
    <div>
      <Login />
      <Dashboard />
      <AnsweredQuestionDetail />
      <AnswerQuestion />
      <Four0Four />
      <LeaderBoard />
      <LeaderCard />
      <Nav />
      <NewQuestion />
      <QuestionDetail />
      <QuestionListItem />
      <UnansweredQuestionDetail />
    </div>
  );
};

export default App;
