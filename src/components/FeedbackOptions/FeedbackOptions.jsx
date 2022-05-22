import PropTypes from 'prop-types';
import s from '../FeedbackOptions/FeedbackOptions.module.css';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            className={s.button}
            key={option}
            name={option}
            type="button"
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
