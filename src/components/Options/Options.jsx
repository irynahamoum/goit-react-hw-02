import { HiOutlineFaceSmile } from 'react-icons/hi2';
import { PiSmileyMeh, PiSmileySad } from 'react-icons/pi';
import css from './options.module.css';
import { RxReset } from 'react-icons/rx';

const Options = ({ updateFeedback, total, reset }) => {
  return (
    <div className={css.buttonsContainer}>
      <button className={css.feedbackBtn} onClick={() => updateFeedback('good')}>
        <HiOutlineFaceSmile size={40} color={'#54ed54'} />
      </button>
      <button className={css.feedbackBtn} onClick={() => updateFeedback('neutral')}>
        <PiSmileyMeh size={40} color={'#fd9619'} />
      </button>
      <button className={css.feedbackBtn} onClick={() => updateFeedback('bad')}>
        <PiSmileySad size={40} color={'#e83434'} />
      </button>
      {total > 0 && (
        <button className={css.feedbackBtn} onClick={reset}>
          <RxReset size={40} color={'#0cceff'} />
        </button>
      )}
    </div>
  );
};

export default Options;
