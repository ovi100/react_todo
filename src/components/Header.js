import PropTypes from 'prop-types';
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
const Header = ({ title, ...restProps }) => {
  return (
    <div className="header">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="button" onClick={restProps.onToggle}>
        {restProps.toggleForm ? <BiMinus /> : <BiPlus />}
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
