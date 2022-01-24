import PropTypes from 'prop-types';

const Header = ({ title, onShow, showForm }) => {
  return (
    <div className="header">
      <div className="title">
        <h1>{title}</h1>
      </div>
    </div>
  )
}

Header.defaultProps = {
  title: 'Todo Manager'
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header;
