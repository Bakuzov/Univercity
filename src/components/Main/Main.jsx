import PropTypes from 'prop-types';

function Main({ children }) {
  return (
    <div>
      Main
      {children}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
