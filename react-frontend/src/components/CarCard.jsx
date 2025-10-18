import Button from './Button'

export default function CarCard({ name, price, image, stock }) {
  const handleOrderClick = () => {
    // static redirect to the order form for now
    // assumption: order form route is '/order'
    window.location.href = '/order'
  }

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
          <Button onClick={handleOrderClick} className="primary" aria-label={`Order ${name}`}>
            Order Now
          </Button>
        </div>
      </div>
    </article>
  )
}
