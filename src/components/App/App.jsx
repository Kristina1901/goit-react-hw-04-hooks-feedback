import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import s from '../App/App.module.css';
const types = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad',
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = value => {
    switch (value) {
      case types.GOOD:
        setGood(prev => prev + 1);
        break;
      case types.NEUTRAL:
        setNeutral(prev => prev + 1);
        break;
      case types.BAD:
        setBad(prev => prev + 1);
        break;

      default:
        throw new Error();
    }
  };

  function countTotalFeedback() {
    return bad + good + neutral;
  }

  function countPositiveFeedbackPercentage() {
    let total = countTotalFeedback();
    if (total === 0) {
      return 0;
    } else {
      return Math.round((good / total) * 100);
    }
  }

  return (
    <div className={s.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.values(types)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Section>
          <Notification message="There is no feedback" />
        </Section>
      )}
    </div>
  );
};
export default App;
