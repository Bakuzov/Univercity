import PropTypes from 'prop-types';
import s from './Card.module.css';
import noImage from '../../assets/no.png';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function Card({ imgURL = noImage }) {
  return (
    <div>
      <img src={imgURL} alt="nothing see you" />
      <p>UNIVERSITY</p>
      <p>MIT</p>
      <ul>
        <li>
          <FaEdit />
        </li>
        <li>
          <FaTrashAlt />
        </li>
      </ul>
      <p>
        Опыт, концентрат знаний и возможность избежать большинство ошибок при
        приеме на работу. Мы знаем, что хотят большинство локальных и
        иностранных компаний и можем вам это дать. А еще мы постоянно
        совершенствуем наши курсы программирования, добавляя туда что-то новое.
        Вы можете лично ознакомиться с историями успеха наших выпускников, чтобы
        убедиться в эффективности нашей методики обучения. Да, мы начнем с азов
        и самой простой информации. Знаем, что большинство людей приходят к нам
        с нулевыми знаниями.
      </p>
    </div>
  );
}

Card.propTypes = {};

export default Card;
