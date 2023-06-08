import React from 'react';

export const FeedbackStatistic = ({options, feedback, total, posFeedback}) => {
  return (
    <>
      <ul>
        {options.map(option => (
          <li key={option}>
            {option} : {feedback[option]}
          </li>
        ))}
      </ul>
      <p>Total = {total}</p>
      <p>Positive feedback = {posFeedback}%</p>
    </>
  );
};
