import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import QuestionListItem from "./QuestionListItem/QuestionListItem";

const Dashboard = () => {
  const [showAnswered, setShowAnswered] = useState(false);

  const loggedInUser = useSelector(
    ({ authedUserReducer }) => authedUserReducer
  );
  const users = useSelector(({ usersReducer }) => usersReducer);
  const questions = useSelector(({ questionsReducer }) => questionsReducer);

  const loggedInUserAnsweredQuestion =
    loggedInUser && Object.keys(users[loggedInUser].answers);

  const answered =
    loggedInUser &&
    Object.values(questions)
      .filter((question) => loggedInUserAnsweredQuestion.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);

  const unanswered =
    loggedInUser &&
    Object.values(questions)
      .filter((question) => !loggedInUserAnsweredQuestion.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div style={{ margin: "3rem" }}>
      {loggedInUser ? (
        <div>
          <div>
            <button onClick={() => setShowAnswered(false)}>
              Unanswered Questions
            </button>
            <button onClick={() => setShowAnswered(true)}>
              Answered Questions
            </button>
          </div>

          {showAnswered ? (
            <div className="answered">
              {answered.map((answer) => (
                <div key={answer.id}>
                  <QuestionListItem
                    author={answer.author}
                    id={answer.id}
                    optionOne={answer.optionOne}
                    optionTwo={answer.optionTwo}
                    route={`/result/${answer.id}`}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="unanswered">
              {unanswered.map((answer) => (
                <div key={answer.id}>
                  <QuestionListItem
                    author={answer.author}
                    id={answer.id}
                    optionOne={answer.optionOne}
                    optionTwo={answer.optionTwo}
                    route={`/questions/${answer.id}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Dashboard;
