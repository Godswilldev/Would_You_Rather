import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import LeaderCard from "./LeaderCard/LeaderCard";

const LeaderBoard = () => {
  const users = useSelector(({ usersReducer }) => usersReducer);
  const authedUser = useSelector(({ authedUserReducer }) => authedUserReducer);

  return (
    <div>
      {authedUser ? (
        Object.values(users)
          .sort(
            (a, b) =>
              b.questions.length +
              Object.values(b.answers).length -
              (a.questions.length + Object.values(a.answers).length)
          )
          .map((user) => (
            <div key={user.id}>
              <LeaderCard
                name={user.name}
                avatarURL={user.avatarURL}
                questionsLength={user.questions.length}
                answersLength={Object.values(user.answers).length}
                score={
                  user.questions.length + Object.values(user.answers).length
                }
              />
            </div>
          ))
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default LeaderBoard;
