import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CarCard from './components/CarCard'
import './App.css'
import BugattiImg from './images/Bugatti Veyron 16.4 Grand Sport Vitesse.jpeg'
import AventadorImg from './images/Aventador LP 700-4 Roadster.png'
import ViperImg from './images/2000 Dodge Viper GTS-R Concept.jpg'

export default function App() {
  const cars = [
    {
      name: 'Bugatti Veyron 16.4 Grand Sport Vitesse',
      price: '$42,000',
      image: BugattiImg,
      stock: 11,
    },
    {
      name: 'Aventador LP 700-4 Roadster',
      price: '$55,300',
      image: AventadorImg,
      stock: 7,
    },
    {
      name: '2000 Dodge Viper GTS-R Concept',
      price: '$147,500',
      image: ViperImg,
      stock: 4,
    },
  ]

  return (
    <div className="app-container">
      <Navbar />
  <Hero />
      <main className="main">
        <h1 className="page-title">Shop Now</h1>
        <div className="cars-grid">
          {cars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </main>
    </div>
  )
}
