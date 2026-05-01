import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ title, content, to }) => {
  return (
    <Link to={to} className="card_link">
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{content}</p>
      </div>
    </Link>
  )
}

export default Card
