import css from './Description.module.css';
import PropTypes from 'prop-types';

const Description = ({ title, text }) => {
  return (
    <div className={css.description}>
      <h1 className={css.descriptionTitle}>{title}</h1>
      <p className={css.descriptionText}>{text}</p>
    </div>
  );
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Description;
