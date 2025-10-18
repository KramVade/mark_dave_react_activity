import { Link } from 'react-router-dom'
import Button from './Button'

export default function CarCard({ id, name, price, image, stock }) {
  return (
    <article className="card car-card">
      <div className="card-media">
        <img src={image} alt={name} />
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-sub">{price}</p>
        <p className="card-stock">Stock: {stock}</p>
        <div className="card-actions">
          <Link to={`/order/${id}`} className="btn primary" aria-label={`Order ${name}`}>
            Order Now
          </Link>
        </div>
      </div>
    </article>
  )
}
