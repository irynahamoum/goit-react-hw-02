import Description from './components/Description/Description';
import description from './assets/Description.json';
import Options from './components/Options/Options';
import { useState } from 'react';
import Feedback from './components/Feedback/Feedback';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  return (
    <div>
      <Description title={description.title} text={description.text} />
      <Options updateFeedback={updateFeedback} feedback={feedback} />
      <Feedback feedback={feedback} />
    </div>
  );
};

export default App;
