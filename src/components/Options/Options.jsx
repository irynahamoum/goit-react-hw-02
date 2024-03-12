import { HiOutlineFaceSmile } from 'react-icons/hi2';
import { PiSmileyMeh, PiSmileySad } from 'react-icons/pi';
import css from './options.module.css';

const Options = ({ updateFeedback }) => {
  return (
    <div className={css.buttonsContainer}>
      <button className={css.feedbackBtn} onClick={() => updateFeedback('good')}>
        <HiOutlineFaceSmile size={40} color={'#54ed54'} />
      </button>
      <button className={css.feedbackBtn} onClick={() => updateFeedback('neutral')}>
        <PiSmileyMeh size={40} color={'#fcad03'} />
      </button>
      <button className={css.feedbackBtn} onClick={() => updateFeedback('bad')}>
        <PiSmileySad size={40} color={'#f04c32'} />
      </button>
    </div>
  );
};

export default Options;
