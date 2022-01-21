import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ title, onShow, showForm }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showForm ? 'red':'green'} text={showForm ? 'Close':'Add'} onClick={onShow} />
    </header>
  )
}

Header.defaultProps = {
  title: 'React Todo'
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header;
