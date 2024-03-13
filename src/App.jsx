import Description from './components/Description/Description';
import description from './assets/Description.json';
import Options from './components/Options/Options';
import { useState } from 'react';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = totalFeedback > 0 ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100) : 0;
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  const handleReset = () => {
    setFeedback({
      ...feedback,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <Description title={description.title} text={description.text} />
      <Options updateFeedback={updateFeedback} total={totalFeedback} reset={handleReset} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback feedback={feedback} total={totalFeedback} positive={positive} />
      )}
    </div>
  );
};

export default App;
