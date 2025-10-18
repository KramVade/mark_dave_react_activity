import { useParams } from 'react-router-dom'
import Button from '../components/Button'

export default function OrderPage({ cars }) {
  const { carId } = useParams()
  const car = cars.find((c) => c.id === carId)

  if (!car) {
    return (
      <main className="main">
        <h1 className="page-title">Car Not Found</h1>
        <p style={{ color: 'white', textAlign: 'center' }}>
          Sorry, we couldn't find the car you're looking for.
        </p>
      </main>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    alert(
      `Order submitted for ${car.name}!\nName: ${formData.get('name')}\nEmail: ${formData.get('email')}`
    )
  }

  return (
    <main className="main order-page">
      <h1 className="page-title">Order Your {car.name}</h1>
      <div className="order-details">
        <div className="order-car-preview">
          <img src={car.image} alt={car.name} />
          <h2>{car.name}</h2>
          <p className="price">{car.price}</p>
        </div>
        <form className="order-form" onSubmit={handleSubmit}>
          <h3>Your Details</h3>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-actions">
            <Button type="submit" className="primary">
              Place Order
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}