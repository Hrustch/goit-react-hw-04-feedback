import React from 'react';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <ul>
      {options.map(option => (
        <button name={option} key={option} onClick={onLeaveFeedback}>{option}</button>
      ))}
    </ul>
  );
};