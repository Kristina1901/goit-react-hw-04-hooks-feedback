import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import s from '../App/App.module.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.bad + this.state.good + this.state.neutral;
  }

  countPositiveFeedbackPercentage() {
    let total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    } else {
      return Math.round((this.state.good / total) * 100);
    }
  }

  render() {
    const { bad, good, neutral } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={s.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        {total > 0 ? (
          <Section>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          </Section>
        ) : (
          <Section>
            <Notification message="There is no feedback" />
          </Section>
        )}
      </div>
    );
  }
}
