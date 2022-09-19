import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Tutor from './Tutor/Tutor';

function TutorsList({ tutors }) {
  return (
    <div>
      <h2>ПРЕПОДОВАТЕЛИ</h2>
      <ul>
        {tutors.map(tutor => (
          <Tutor
            key={nanoid(4)}
            firstName={tutor.firstName}
            lastName={tutor.lastName}
            patronymic={tutor.patronymic}
            phone={tutor.phone}
            email={tutor.email}
            city={tutor.city}
            options={tutor.options}
          />
        ))}
      </ul>
    </div>
  );
}

TutorsList.propTypes = {
  titor: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      patronymic: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      options: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TutorsList;
