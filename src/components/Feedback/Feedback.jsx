import css from './feedback.module.css';

const Feedback = ({ feedback }) => {
  return (
    <ul className={css.feedbackStatsContainer}>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
    </ul>
  );
};

export default Feedback;
