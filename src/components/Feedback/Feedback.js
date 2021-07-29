import { useState } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

import styles from './Feedback.module.css';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackGood = e => {
    switch (e) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    Math.ceil((good / countTotalFeedback()) * 100);

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={styles.box}>
      <Section title="">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedbackGood}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  );
}
