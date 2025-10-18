import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'
import './App.css'
import BugattiImg from './images/Bugatti Veyron 16.4 Grand Sport Vitesse.jpeg'
import AventadorImg from './images/Aventador LP 700-4 Roadster.png'
import ViperImg from './images/2000 Dodge Viper GTS-R Concept.jpg'

export default function App() {
  // I've added a unique 'id' for routing purposes
  const cars = [
    {
      id: 'bugatti-veyron',
      name: 'Bugatti Veyron 16.4 Grand Sport Vitesse',
      price: '$42,000',
      image: BugattiImg,
      stock: 11,
    },
    {
      id: 'aventador-roadster',
      name: 'Aventador LP 700-4 Roadster',
      price: '$55,300',
      image: AventadorImg,
      stock: 7,
    },
    {
      id: 'dodge-viper-concept',
      name: '2000 Dodge Viper GTS-R Concept',
      price: '$147,500',
      image: ViperImg,
      stock: 4,
    },
  ]
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage cars={cars} />} />
          <Route path="/order/:carId" element={<OrderPage cars={cars} />} />
        </Routes>
      </div>
    </Router>
  )
}
