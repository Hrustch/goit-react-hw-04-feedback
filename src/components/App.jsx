import { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { FeedbackStatistic } from './Feedback/FeedbackStatistic';
import { Section } from './Feedback/Section';
import { Notification } from './Feedback/Notification';

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  
  countTotalFeedback = () => {
    console.log(this.state.values)
    return Object.values(this.state).reduce((acc, count) => (acc + count), 0);
  };
  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() > 0) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
    return 0;
  };
  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState({
      [name]: this.state[name] + 1,
    });
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const posFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {total > 0 ? (
          <Section title="Statistic">
            <FeedbackStatistic
              options={options}
              state={this.state}
              total={total}
              posFeedback={posFeedback}
            />
          </Section>
        ) : (
          <Notification massage="Please, leave your masage!" />
        )}
      </div>
    );
  }
}
