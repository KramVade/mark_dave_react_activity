import heroImg from '../images/1971-Ringbrothers-Aston-Martin-DBS-Octavia-002-1080.jpg'

export default function Hero({ imageUrl = heroImg, title = 'ENTROPY ON WHEELS' }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="hero-overlay">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-quote">"We know the loop ends, we still drive it."</p>
      </div>
    </section>
  )
}
