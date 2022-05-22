import PropTypes from 'prop-types';
import s from '../Section/Section.module.css';
export default function Section({ title, children }) {
  return (
    <div>
      <span className={s.header}>{title}</span>
      {children}
    </div>
  );
}
Section.propTypes = {
  title: PropTypes.string,
  chidren: PropTypes.node,
};
