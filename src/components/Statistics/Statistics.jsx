import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';
export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <div>
      <span className={s.header}>Statistics</span>
      <ul>
        <li className={s.item}>
          Good:<span className={s.number}>{good}</span>
        </li>
        <li className={s.item}>
          Neutral:<span className={s.number}>{neutral}</span>
        </li>
        <li className={s.item}>
          Bad:<span className={s.number}>{bad}</span>
        </li>
        <li className={s.item}>
          Total:<span className={s.number}>{total}</span>
        </li>
        <li className={s.item}>
          Positive feedback:
          <span className={s.number}>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
