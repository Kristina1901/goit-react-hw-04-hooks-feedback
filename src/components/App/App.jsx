import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import s from '../App/App.module.css';
const App = () => {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleBtnClick = key => {
    setOptions(options => ({ ...options, [key]: options[key] + 1 }));
  };

  function countTotalFeedback() {
    return options.bad + options.good + options.neutral;
  }

  function countPositiveFeedbackPercentage() {
    let total = countTotalFeedback();
    if (total === 0) {
      return 0;
    } else {
      return Math.round((options.good / total) * 100);
    }
  }

  return (
    <div className={s.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={handleBtnClick}
        />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section>
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
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
