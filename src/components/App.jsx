import React, { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { FeedbackStatistic } from './Feedback/FeedbackStatistic';
import { Section } from './Feedback/Section';
import { Notification } from './Feedback/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, count) => acc + count, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total > 0) {
      return Math.round((feedback.good / total) * 100);
    }
    return 0;
  };

  const handleFeedback = (event) => {
    const { name } = event.target
    setFeedback((prevFeedback) => ({ ...prevFeedback, [name]: prevFeedback[name] + 1}));
  };

  const options = Object.keys(feedback);
  const total = countTotalFeedback();
  const posFeedback = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      {total > 0 ? (
        <Section title="Statistic">
          <FeedbackStatistic
            options={options}
            feedback={feedback}
            total={total}
            posFeedback={posFeedback}
          />
        </Section>
      ) : (
        <Notification message="Please, leave your message!" />
      )}
    </div>
  );
};

export default App;
