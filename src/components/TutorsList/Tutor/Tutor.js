import PropTypes from 'prop-types';
import s from './Tutor.module.css';

function Tutor({
  firstName,
  lastName,
  patronymic,
  phone,
  email,
  city,
  options,
}) {
  return (
    <div className={s.div}>
      <p className={s.p}>
        <span className={s.span}>{firstName}</span>
        <span className={s.span}>{lastName}</span>
        <span className={s.span}>{patronymic}</span>
      </p>
      <p className={s.p}>
        <span className={s.span}> {phone}</span>
        <span className={s.span}> {email}</span>
        <span className={s.span}> {city}</span>
      </p>

      <p className={s.p}>
        <span className={s.span}> {options}</span>
      </p>
    </div>
  );
}

Tutor.propTypes = {};

export default Tutor;
