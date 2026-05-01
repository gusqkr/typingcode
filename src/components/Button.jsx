import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({ to, onClick, children }) => {
  if (to) {
    return (
      <Link to={to} className="switch-btn">
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className="modal-btn">
      {children}
    </button>
  )
}

export default Button
