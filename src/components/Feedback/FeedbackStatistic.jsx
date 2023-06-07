import React from 'react';

export const FeedbackStatistic = ({options, state, total, posFeedback}) => {
  return (
    <>
      <ul>
        {options.map(option => (
          <li key={option}>
            {option} : {state[option]}
          </li>
        ))}
      </ul>
      <p>Total = {total}</p>
      <p>Positive feedback = {posFeedback}%</p>
    </>
  );
};
